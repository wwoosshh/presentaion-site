import { create } from 'zustand'

interface PresenterState {
  activeIndex: number
  overview: boolean
  notes: boolean
  timer: boolean
  ambient: boolean
  helpOpen: boolean
  setActiveIndex: (i: number) => void
  toggleOverview: () => void
  toggleNotes: () => void
  toggleTimer: () => void
  toggleAmbient: () => void
  toggleHelp: () => void
  closeAllOverlays: () => void
}

export const usePresenterMode = create<PresenterState>((set) => ({
  activeIndex: 0,
  overview: false,
  notes: false,
  timer: false,
  ambient: true,
  helpOpen: false,
  setActiveIndex: (i) => set({ activeIndex: i }),
  toggleOverview: () => set((s) => ({ overview: !s.overview })),
  toggleNotes: () => set((s) => ({ notes: !s.notes })),
  toggleTimer: () => set((s) => ({ timer: !s.timer })),
  toggleAmbient: () => set((s) => ({ ambient: !s.ambient })),
  toggleHelp: () => set((s) => ({ helpOpen: !s.helpOpen })),
  closeAllOverlays: () => set({ overview: false, notes: false, helpOpen: false }),
}))
