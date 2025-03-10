import { create } from 'zustand';

export const useGolfStore = create((set) => ({
  selectedZone: null,
  completeZone: null,

  selectZone: (zoneId) => set({ selectedZone: zoneId }),
  setCompleteZone: (zoneInfo) => set({ completeZone: zoneInfo }),
}));
