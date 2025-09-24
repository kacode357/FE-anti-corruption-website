"use client"

import { useEffect, useMemo, useRef, useState } from "react"

export type TTSLang = "vi" | "en"

export interface UseTTSOptions {
  lang: TTSLang
  defaultRate?: number // 0.1 - 10
  defaultPitch?: number // 0 - 2
  defaultVolume?: number // 0 - 1
}

export function useTTS({ lang, defaultRate = 1, defaultPitch = 1, defaultVolume = 1 }: UseTTSOptions) {
  const synthRef = useRef<SpeechSynthesis | null>(typeof window !== "undefined" ? window.speechSynthesis : null)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceURI, setVoiceURI] = useState<string | null>(null)
  const [rate, setRate] = useState<number>(() => Number(localStorage.getItem("tts_rate") || defaultRate))
  const [pitch, setPitch] = useState<number>(() => Number(localStorage.getItem("tts_pitch") || defaultPitch))
  const [volume, setVolume] = useState<number>(() => Number(localStorage.getItem("tts_volume") || defaultVolume))
  const [speaking, setSpeaking] = useState(false)
  const [paused, setPaused] = useState(false)

  // Load voices (some browsers load async)
  useEffect(() => {
    if (!synthRef.current) return
    const load = () => setVoices(synthRef.current!.getVoices())
    load()
    window.speechSynthesis.onvoiceschanged = load
    return () => {
      window.speechSynthesis.onvoiceschanged = null
    }
  }, [])

  // Filter voices by lang
  const langPrefix = lang === "vi" ? "vi" : "en"
  const filteredVoices = useMemo(
    () => voices.filter(v => v.lang?.toLowerCase().startsWith(langPrefix)),
    [voices, langPrefix]
  )

  // Pick a default voice when lang changes
  useEffect(() => {
    if (!voiceURI && filteredVoices.length) setVoiceURI(filteredVoices[0].voiceURI)
  }, [filteredVoices, voiceURI])

  // Persist settings
  useEffect(() => localStorage.setItem("tts_rate", String(rate)), [rate])
  useEffect(() => localStorage.setItem("tts_pitch", String(pitch)), [pitch])
  useEffect(() => localStorage.setItem("tts_volume", String(volume)), [volume])

  // Core actions
  const speak = (text: string) => {
    if (!synthRef.current || !text) return
    // stop any previous
    synthRef.current.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = lang === "vi" ? "vi-VN" : "en-US"
    const v = filteredVoices.find(v => v.voiceURI === voiceURI) || filteredVoices[0]
    if (v) utter.voice = v
    utter.rate = rate
    utter.pitch = pitch
    utter.volume = volume
    utter.onend = () => { setSpeaking(false); setPaused(false) }
    utter.onpause = () => setPaused(true)
    utter.onresume = () => setPaused(false)
    utter.onerror = () => { setSpeaking(false); setPaused(false) }
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
    speaking, paused,
    rate, setRate,
    pitch, setPitch,
    volume, setVolume,
    voices: filteredVoices,
    voiceURI, setVoiceURI,
    speak, stop, pause, resume,
  }
}
