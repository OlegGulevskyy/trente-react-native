import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./client";

export const useSupabaseSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        const { user } = session;
        const { data } = await supabase
          .from("Users")
          .select("*")
          .eq("googleId", user.id);

        const userExists = Boolean(data.length);
        if (!userExists) {
          await supabase.from("Users").insert({
            googleId: user.id,
            email: user.email,
            name: session.user.user_metadata.full_name,
            picture: user.user_metadata.avatar_url,
          });
        }
      }

      setSession(session);
    });
  }, []);

  return { session };
};
