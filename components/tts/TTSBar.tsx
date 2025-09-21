"use client"

import { useMemo } from "react"
import { useTTS, TTSLang } from "@/hooks/useTTS"

interface TTSBarProps {
  lang: TTSLang
  getText: () => string
  className?: string
}

export default function TTSBar({ lang, getText, className }: TTSBarProps) {
  const preferred = lang === "vi"
    ? ["Google Vietnamese", "Microsoft Hoai My Online (Natural) - Vietnamese (Vietnam)", "vi-VN"]
    : undefined

  const {
    speaking, paused,
    speak, stop, pause, resume,
    voices, voiceURI, setVoiceURI,
    rate, setRate, pitch, setPitch, volume, setVolume,
  } = useTTS({ lang, preferredVoiceNames: preferred })

  const canUse = typeof window !== "undefined" && "speechSynthesis" in window
  const voiceLabel = useMemo(() => voices.find(v => v.voiceURI === voiceURI)?.name ?? "Default", [voices, voiceURI])
  if (!canUse) return null

  const previewText = lang === "vi"
    ? "Xin chào! Đây là giọng đọc tiếng Việt. Bạn có nghe rõ không?"
    : "Hello! This is an English preview voice. Do you hear it well?"

  return (
    <div className={`rounded-xl border border-sky-100 bg-white/90 p-3 shadow-sm ${className || ""}`}>
      <div className="flex flex-wrap items-center gap-2">
        {!speaking && (
          <button onClick={() => speak(getText())}
            className="rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-sky-700">
            ▶️ {lang === "vi" ? "Đọc" : "Play"}
          </button>
        )}
        {speaking && !paused && (
          <button onClick={pause}
            className="rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-sky-700">
            ⏸️ {lang === "vi" ? "Tạm dừng" : "Pause"}
          </button>
        )}
        {speaking && paused && (
          <button onClick={resume}
            className="rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-sky-700">
            ⏯️ {lang === "vi" ? "Tiếp tục" : "Resume"}
          </button>
        )}
        <button onClick={stop}
          className="rounded-lg border border-sky-200 bg-white px-3 py-1.5 text-sm font-semibold text-sky-700 hover:bg-sky-50">
          ⏹️ {lang === "vi" ? "Dừng" : "Stop"}
        </button>

        {/* Preview câu mẫu để test giọng */}
        <button
          onClick={() => speak(previewText)}
          className="ml-2 rounded-lg border border-sky-200 bg-white px-3 py-1.5 text-sm font-semibold text-sky-700 hover:bg-sky-50"
          title="Preview sample"
        >
          🔊 {lang === "vi" ? "Nghe thử" : "Preview"}
        </button>

        {/* Voice select */}
        <label className="ml-2 text-xs text-gray-600">{lang === "vi" ? "Giọng:" : "Voice:"}</label>
        <select
          value={voiceURI ?? ""}
          onChange={e => setVoiceURI(e.target.value)}
          className="rounded-md border border-sky-200 bg-white px-2 py-1 text-sm"
        >
          {voices.map(v => (
            <option key={v.voiceURI} value={v.voiceURI}>
              {v.name} ({v.lang})
            </option>
          ))}
        </select>
        <span className="text-xs text-gray-500 hidden sm:inline">({voiceLabel})</span>
      </div>

      {/* Sliders */}
      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <Slider label={lang === "vi" ? "Tốc độ" : "Rate"} value={rate} min={0.5} max={1.6} step={0.1} onChange={setRate}/>
        <Slider label={lang === "vi" ? "Cao độ" : "Pitch"} value={pitch} min={0}   max={2}   step={0.1} onChange={setPitch}/>
        <Slider label={lang === "vi" ? "Âm lượng" : "Volume"} value={volume} min={0} max={1} step={0.05} onChange={setVolume}/>
      </div>
    </div>
  )
}

function Slider({ label, value, min, max, step, onChange }:{
  label: string; value: number; min: number; max: number; step: number; onChange: (v:number)=>void
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-16 text-xs text-gray-600">{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} className="w-full"/>
      <span className="w-10 text-right text-xs text-gray-600">{value.toFixed(2)}</span>
    </div>
  )
}
