import { useEffect, useState } from "react";
import { useSupabaseSession } from "../hooks/useSession";
import { UserDb } from "../hooks/useSession";
import { getUser } from "../data/user";

export const useUser = () => {
  const { session } = useSupabaseSession();
  const [user, setUser] = useState<UserDb | null>(null);

  useEffect(() => {
    if (session) {
      getUser(session.user.id).then((user) => {
        setUser(user);
      });
    }
  }, [session]);

  return { user };
};
