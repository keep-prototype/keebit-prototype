import { create } from 'zustand';

export const useSheetStore = create((set) => ({
  isGolfZoneListOpen: false,

  openGolfZoneList: () => set({ isGolfZoneListOpen: true }),
  closeGolfZoneList: () => set({ isGolfZoneListOpen: false }),
  toggleGolfZoneList: () =>
    set((state) => ({ isGolfZoneListOpen: !state.isGolfZoneListOpen })),
}));
