import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase/client";
import { Database } from "../lib/supabase/database.types";
import { getUser } from "../data/user";

export type UserDb = Database["public"]["Tables"]["Users"]["Row"];
// I am really not sure about subscribing to the session every time I need a user
// but for now...
export const useSupabaseSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        const { user } = session;
        const dbUser = await getUser();

        const userExists = Boolean(dbUser);
        if (!userExists) {
          await supabase.from("Users").insert({
            googleId: user.id,
            email: user.email,
            name: session.user.user_metadata.full_name,
            picture: user.user_metadata.avatar_url,
          });
        } else {
        }
      }

      setSession(session);
    });

    return () => {
      data?.subscription.unsubscribe();
    };
  }, []);

  return { session };
};
