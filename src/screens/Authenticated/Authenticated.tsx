import { useState, useEffect, useMemo } from "react";
import { Alert } from "react-native";
import { Session } from "@supabase/supabase-js";

import { supabase, Database } from "../../lib/supabase";
import { Onboarding } from "../../features/Onboarding";
import { Playground } from "../../features/Playground";
import { useAuthenticatedNavigation } from "./navigation";
import { Home } from "../Home";
import { Profile } from "../Profile";
import { History } from "../History";
import { Messages } from "../Messages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomMenu } from "../../components/BottomMenu";

const AuthenticatedBottomTabs = createBottomTabNavigator();

type PartialAccount = Pick<
  Database["public"]["Tables"]["Users"]["Row"],
  "name" | "picture" | "type"
>;

export const Authenticated = ({ session }: { session: Session }) => {
  const [account, setAccount] = useState<PartialAccount | null>(null);
  const navigation = useAuthenticatedNavigation();

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
    <>
      <AuthenticatedBottomTabs.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <BottomMenu {...props} />}
      >
        <>
          <AuthenticatedBottomTabs.Screen
            name="Onboarding"
            component={Onboarding}
          />
          <AuthenticatedBottomTabs.Screen name="Home" component={Home} />
          <AuthenticatedBottomTabs.Screen name="History" component={History} />
          <AuthenticatedBottomTabs.Screen
            name="Playground"
            component={Playground}
          />
          <AuthenticatedBottomTabs.Screen
            name="Messages"
            component={Messages}
          />
          <AuthenticatedBottomTabs.Screen name="Profile" component={Profile} />
        </>
      </AuthenticatedBottomTabs.Navigator>
    </>
  );
};
