import { supabase } from "../lib/supabase";

export const getUser = async (id: string) => {
  const { data } = await supabase.from("Users").select("*").eq("googleId", id);

  return data[0];
};
