import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { View } from "react-native";

import { supabase } from "./src/lib/supabase";
import { Auth } from "./src/screens/Auth";
import { Account } from "./src/screens/Account";

export default function App() {
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

  return (
    <View>
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <Auth />
      )}
    </View>
  );
}
