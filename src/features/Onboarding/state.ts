import { create } from "zustand";
import type { OnboardingStore } from "./types";

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  accountType: null,
  setAccountType: (type) => set({ accountType: type }),
  selectedGenres: [],
  setSelectedGenres: (genres) => set({ selectedGenres: genres }),
}));
