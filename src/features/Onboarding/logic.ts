import { UserDb } from "../../hooks/useSession";
import { supabase } from "../../lib/supabase";
import { CurrentScreenProps } from "./types";

export const saveOnboardingData = async (
  user: UserDb,
  {
    selectedGenres,
    accountType,
  }: Pick<CurrentScreenProps, "accountType" | "selectedGenres">
) => {
  const date = new Date().toUTCString();

  try {
    await supabase
      .from("Users")
      .update({ type: accountType })
      .eq("id", user.id);

    await supabase.from("Preferences").insert({
      userId: user.id,
      music: selectedGenres,
      updatedAt: date,
    });
    return true;
  } catch (err) {
    console.log("error saving onboarding data to supabase", err);
    return false;
  }
};
