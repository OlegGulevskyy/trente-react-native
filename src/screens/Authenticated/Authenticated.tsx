import { useEffect, useMemo } from "react";
import { Text } from "react-native";

import { Onboarding } from "../../features/Onboarding";
import { Playground } from "../../features/Playground";
import { useAuthenticatedNavigation } from "./navigation";
import { Home } from "../Home";
import { Profile } from "../Profile";
import { History } from "../History";
import { Messages } from "../Messages";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomMenu } from "../../components/BottomMenu";
import { useUser } from "../../hooks/useUser";
import { useAppHeader } from "../../hooks/useAppHeader";
import { FullScreenParent } from "../../components/FullScreenParent/FullScreenParent";
import { Settings } from "../../features/Settings";

const AuthenticatedBottomTabs = createBottomTabNavigator();

export const Authenticated = () => {
  /* const [account, setAccount] = useState<PartialAccount | null>(null); */
  const navigation = useAuthenticatedNavigation();
  const { user, isLoading, error } = useUser();
  const { headerOptions } = useAppHeader<BottomTabNavigationOptions>();

  // if account type is not selected by user, we need to onboard them
  const requiresOnboarding = useMemo(() => {
    if (!isLoading && !error && user) {
      return user.type === null || user.type === undefined || user.type === "";
    }
  }, [isLoading]);

  useEffect(() => {
    if (requiresOnboarding && !isLoading) {
      navigation.navigate("Onboarding");
    } else if (!requiresOnboarding && !isLoading) {
      navigation.navigate("Playground");
    }
  }, [requiresOnboarding]);

  if (isLoading) {
    return (
      <FullScreenParent>
        <Text className="m-auto">LOADING INFO...</Text>
      </FullScreenParent>
    );
  }

  return (
    <>
      <AuthenticatedBottomTabs.Navigator
        screenOptions={{ ...headerOptions }}
        tabBar={(props) => <BottomMenu {...props} />}
      >
        <>
          <AuthenticatedBottomTabs.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
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
      <Settings />
    </>
  );
};
