import "react-native-url-polyfill/auto";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { Auth } from "./src/screens/Auth";
import { Account } from "./src/screens/Account";
import { useSupabaseSession } from "./src/lib/supabase";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { session } = useSupabaseSession();

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          KosugiMaru: require("./src/assets/fonts/KosugiMaru-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <Auth />
      )}
    </View>
  );
}
