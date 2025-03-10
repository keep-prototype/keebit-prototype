import { create } from 'zustand';

export const useGolfStore = create((set) => ({
  selectedZone: null,

  selectZone: (zoneId) => set({ selectedZone: zoneId }),
}));
