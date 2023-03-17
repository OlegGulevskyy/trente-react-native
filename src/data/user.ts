import { supabase } from "../lib/supabase";

export const getUser = async (id?: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("Users")
    .select("*")
    .eq("googleId", id ?? user.id);

  return data[0];
};
