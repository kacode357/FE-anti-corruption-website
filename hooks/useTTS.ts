// hooks/useTTS.ts
"use client"

import { useEffect, useMemo, useRef, useState } from "react"

export type TTSLang = "vi" | "en"

export interface UseTTSOptions {
  lang: TTSLang
  defaultRate?: number
  defaultPitch?: number
  defaultVolume?: number
  preferredVoiceNames?: string[]
}

const DEFAULT_VI_PREFERRED = [
  "Google Vietnamese",
  "Microsoft Hoai My Online (Natural) - Vietnamese (Vietnam)",
  "Microsoft HoaiMy Online (Natural) - Vietnamese (Vietnam)",
  "Microsoft Mai Online (Natural) - Vietnamese (Vietnam)",
  "vi-VN",
  "Linh",
  "Vietnamese",
]

export function useTTS({
  lang,
  defaultRate = 1,
  defaultPitch = 1,
  defaultVolume = 1,
  preferredVoiceNames,
}: UseTTSOptions) {
  const synthRef = useRef<SpeechSynthesis | null>(typeof window !== "undefined" ? window.speechSynthesis : null)

  // KHỞI TẠO BẰNG GIÁ TRỊ MẶC ĐỊNH (KHÔNG ĐỘNG TỚI localStorage Ở ĐÂY)
  const [rate, setRate] = useState<number>(defaultRate)
  const [pitch, setPitch] = useState<number>(defaultPitch)
  const [volume, setVolume] = useState<number>(defaultVolume)

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceURI, setVoiceURI] = useState<string | null>(null)
  const [speaking, setSpeaking] = useState(false)
  const [paused, setPaused] = useState(false)

  // ĐỌC localStorage TRÊN CLIENT SAU KHI MOUNT
  useEffect(() => {
    if (typeof window === "undefined") return
    const r = Number(window.localStorage.getItem("tts_rate"))
    const p = Number(window.localStorage.getItem("tts_pitch"))
    const v = Number(window.localStorage.getItem("tts_volume"))
    if (!Number.isNaN(r) && r) setRate(r)
    if (!Number.isNaN(p) && p) setPitch(p)
    if (!Number.isNaN(v) && v >= 0) setVolume(v)
  }, [])

  // LẤY VOICE (CLIENT-ONLY)
  useEffect(() => {
    if (!synthRef.current) return
    const load = () => setVoices(synthRef.current!.getVoices())
    load()
    const handler = load
    // @ts-ignore
    window.speechSynthesis.onvoiceschanged = handler
    return () => {
      // @ts-ignore
      window.speechSynthesis.onvoiceschanged = null
    }
  }, [])

  // LỌC THEO NGÔN NGỮ
  const langPrefix = lang === "vi" ? "vi" : "en"
  const filteredVoices = useMemo(
    () => voices.filter((v) => v.lang?.toLowerCase().startsWith(langPrefix)),
    [voices, langPrefix]
  )

  // CHỌN GIỌNG ƯU TIÊN
  const bestVoiceURI = useMemo(() => {
    if (!filteredVoices.length) return null
    const prefers =
      (lang === "vi"
        ? preferredVoiceNames && preferredVoiceNames.length
          ? preferredVoiceNames
          : DEFAULT_VI_PREFERRED
        : preferredVoiceNames) || []
    for (const key of prefers) {
      const found = filteredVoices.find(
        (v) => v.name?.toLowerCase() === key.toLowerCase() || v.voiceURI?.toLowerCase() === key.toLowerCase()
      )
      if (found) return found.voiceURI
    }
    for (const key of prefers) {
      const found = filteredVoices.find(
        (v) => v.name?.toLowerCase().includes(key.toLowerCase()) || v.voiceURI?.toLowerCase().includes(key.toLowerCase())
      )
      if (found) return found.voiceURI
    }
    return filteredVoices[0].voiceURI
  }, [filteredVoices, preferredVoiceNames, lang])

  // SET VOICE LẦN ĐẦU
  useEffect(() => {
    if (!voiceURI && bestVoiceURI) setVoiceURI(bestVoiceURI)
  }, [bestVoiceURI, voiceURI])

  // PERSIST SETTINGS (CLIENT-ONLY)
  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem("tts_rate", String(rate))
  }, [rate])
  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem("tts_pitch", String(pitch))
  }, [pitch])
  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem("tts_volume", String(volume))
  }, [volume])

  // HÀM ĐỌC
  const speak = (text: string) => {
    if (!synthRef.current || !text) return
    synthRef.current.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = lang === "vi" ? "vi-VN" : "en-US"
    const v =
      filteredVoices.find((v) => v.voiceURI === voiceURI) ||
      filteredVoices.find((v) => v.voiceURI === bestVoiceURI) ||
      filteredVoices[0]
    if (v) utter.voice = v
    utter.rate = rate
    utter.pitch = pitch
    utter.volume = volume
    utter.onend = () => {
      setSpeaking(false)
      setPaused(false)
    }
    utter.onpause = () => setPaused(true)
    utter.onresume = () => setPaused(false)
    utter.onerror = () => {
      setSpeaking(false)
      setPaused(false)
    }
    synthRef.current.speak(utter)
    setSpeaking(true)
    setPaused(false)
  }

  const stop = () => {
    synthRef.current?.cancel()
    setSpeaking(false)
    setPaused(false)
  }
  const pause = () => {
    if (synthRef.current?.speaking) {
      synthRef.current.pause()
      setPaused(true)
    }
  }
  const resume = () => {
    if (synthRef.current?.paused) {
      synthRef.current.resume()
      setPaused(false)
    }
  }

  return {
    speaking,
    paused,
    rate,
    setRate,
    pitch,
    setPitch,
    volume,
    setVolume,
    voices: filteredVoices,
    voiceURI,
    setVoiceURI,
    speak,
    stop,
    pause,
    resume,
  }
}
