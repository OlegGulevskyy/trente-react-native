import { create } from "zustand";
import { supabase } from "../../lib/supabase";
import type { OnboardingStore } from "./types";

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  accountType: null,
  setAccountType: (type) => set({ accountType: type }),
  selectedGenres: [],
  setSelectedGenres: (genres) => set({ selectedGenres: genres }),
  saveToSupabase: async (user, { selectedGenres, accountType }) => {
    const date = new Date().toUTCString();
    console.log("DATE => ", date);
    /* await supabase */
    /*   .from("Users") */
    /*   .update({ type: accountType }) */
    /*   .eq("id", user.id); */
    /**/
    /* await supabase.from("Preferences").insert({ */
    /*   userId: user.id, */
    /*   music: selectedGenres, */
    /*   updatedAt: date, */
    /* }); */
  },
}));
