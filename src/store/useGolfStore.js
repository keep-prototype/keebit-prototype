import { create } from 'zustand';

export const useGolfStore = create((set) => ({
  selectedZone: null,
  completeZone: null,
  reservations: [],

  selectZone: (zoneId) => set({ selectedZone: zoneId }),
  setCompleteZone: (zoneInfo) => set({ completeZone: zoneInfo }),
  setReservations: (table) => set({ reservations: table }),
}));
