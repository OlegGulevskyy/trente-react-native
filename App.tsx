import "react-native-url-polyfill/auto";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import { Auth } from "./src/screens/Auth";
import { Home } from "./src/screens/Home";
import { useSupabaseSession } from "./src/lib/supabase";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

SplashScreen.preventAutoHideAsync();
const Root = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [hideSplashScreen, setResourcesReady] = useState(false);
  const { session } = useSupabaseSession();

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          KosugiMaru: require("./src/assets/fonts/KosugiMaru-Regular.ttf"),
          Coolvetica: require("./src/assets/fonts/coolvetica-regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

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
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        {session && session.user ? (
          <Root.Screen name="Home">
            {(props) => (
              <Home {...props} session={session} key={session.user.id} />
            )}
          </Root.Screen>
        ) : (
          <Root.Screen name="Auth" component={Auth} />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
}
