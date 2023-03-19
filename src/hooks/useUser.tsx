import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getUser } from "../data/user";
import { supabase } from "../lib/supabase";

export const useUser = () => {
  const [session, setSession] = useState(null);
  if (!session) {
    supabase.auth.getSession().then((session) => {
      setSession(session.data.session);
    });
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(session.user.id),
    enabled: !!session,
  });

  return { user: data, error, isLoading };
};
