import { useState, useEffect, useMemo } from "react";
import { View, Alert, Button } from "react-native";
import { Text } from "react-native";
import { Session } from "@supabase/supabase-js";

import { supabase, Database } from "../../lib/supabase";
import { Onboarding } from "../Onboarding";

type PartialAccount = Pick<
  Database["public"]["Tables"]["Users"]["Row"],
  "name" | "picture" | "type"
>;

export const Home = ({ session }: { session: Session }) => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<PartialAccount | null>(null);

  // if account type is not selected by user, we need to onboard them
  const requiresOnboarding = useMemo(() => {
    return account?.type === null;
  }, [account]);

  useEffect(() => {
    if (session && !account) {
      getProfile();
    }
  }, [session, account]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      let { data, error, status } = await supabase
        .from("Users")
        .select(`name, picture, type`)
        .eq("googleId", session?.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAccount(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View>
      {requiresOnboarding ? (
        <Onboarding />
      ) : (
        <View>
          <Text>You are now</Text>
        </View>
      )}
    </View>
  );
};
