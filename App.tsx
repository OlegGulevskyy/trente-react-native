import "react-native-url-polyfill/auto";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClientProvider } from "@tanstack/react-query";

import { Unauthenticated } from "./src/screens/Unauthenticated";
import { Authenticated } from "./src/screens/Authenticated";
import { useSupabaseSession } from "./src/hooks/useSession";
import { usePrepareApp } from "./src/hooks/usePrepare";
import { NavigationTheme } from "./src/theme/navigationTheme";
import { queryClient } from "./src/lib/query";

SplashScreen.preventAutoHideAsync();

// I don't want to createa a file just for Root stack, let it live here for now
const Root = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [hideSplashScreen, setResourcesReady] = useState(false);
  const { session } = useSupabaseSession();

  // prepare and load all the assets
  usePrepareApp({
    onPrepareDone: () => setAppIsReady(true),
  });

  useEffect(() => {
    const disableSplashScreen = async () => {
      await SplashScreen.hideAsync();
      setResourcesReady(true);
    };
    if (appIsReady && !hideSplashScreen) {
      disableSplashScreen();
    }
  }, [appIsReady, hideSplashScreen]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={NavigationTheme}>
        <Root.Navigator screenOptions={{ headerShown: false }}>
          {session && session.user ? (
            <Root.Screen name="Authenticated">
              {(props) => (
                <Authenticated
                  {...props}
                  session={session}
                  key={session.user.id}
                />
              )}
            </Root.Screen>
          ) : (
            <Root.Screen
              name="Unauthenticated"
              component={Unauthenticated}
              options={{ headerShown: false }}
            />
          )}
        </Root.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
