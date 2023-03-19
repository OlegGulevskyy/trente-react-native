import { create } from "zustand";

type ModalState = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  toggleVisibility: () => void;
};
export const useModalState = create<ModalState>((set) => ({
  isVisible: false,
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
  toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible })),
}));
