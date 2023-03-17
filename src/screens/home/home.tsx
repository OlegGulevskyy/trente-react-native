import { useState, useEffect, useMemo } from "react";
import { Alert } from "react-native";
import { Session } from "@supabase/supabase-js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { supabase, Database } from "../../lib/supabase";
import { Onboarding } from "../../features/Onboarding";
import { Playground } from "../../features/Playground";
import { useHomeNavigation } from "./navigation";

const HomeStack = createNativeStackNavigator();

type PartialAccount = Pick<
  Database["public"]["Tables"]["Users"]["Row"],
  "name" | "picture" | "type"
>;

export const Home = ({ session }: { session: Session }) => {
  const [account, setAccount] = useState<PartialAccount | null>(null);
  const navigation = useHomeNavigation();

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
    }
  }

  useEffect(() => {
    if (requiresOnboarding) {
      navigation.navigate("Onboarding");
    } else {
      navigation.navigate("Playground");
    }
  }, [requiresOnboarding]);

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <>
        <HomeStack.Screen name="Onboarding" component={Onboarding} />
        <HomeStack.Screen name="Playground" component={Playground} />
      </>
    </HomeStack.Navigator>
  );
};
