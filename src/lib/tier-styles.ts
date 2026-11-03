import type { Tier } from '../types/study-item'

interface TierStyle {
  border: string
  text: string
  bg: string
  ring: string
  glow: string
}

export const tierStyles: Record<Tier, TierStyle> = {
  starter: {
    border: 'border-slate-500',
    text: 'text-slate-300 light:text-slate-600',
    bg: 'bg-slate-500/10',
    ring: 'ring-slate-400/40',
    glow: 'shadow-[0_0_12px_rgba(148,163,184,0.5)]',
  },
  basic: {
    border: 'border-emerald-500',
    text: 'text-emerald-300 light:text-emerald-700',
    bg: 'bg-emerald-500/10',
    ring: 'ring-emerald-400/40',
    glow: 'shadow-[0_0_12px_rgba(16,185,129,0.5)]',
  },
  epic: {
    border: 'border-violet-500',
    text: 'text-violet-300 light:text-violet-700',
    bg: 'bg-violet-500/10',
    ring: 'ring-violet-400/40',
    glow: 'shadow-[0_0_12px_rgba(167,139,250,0.5)]',
  },
  legendary: {
    border: 'border-amber-400',
    text: 'text-amber-300 light:text-amber-700',
    bg: 'bg-amber-400/10',
    ring: 'ring-amber-300/50',
    glow: 'shadow-[0_0_14px_rgba(251,191,36,0.6)]',
  },
}
