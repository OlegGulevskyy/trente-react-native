import React from "react";
import { View, Button } from "react-native";
import { makeRedirectUri, startAsync } from "expo-auth-session";

import { supabase, SUPABASE_URL } from "../../lib/supabase";

const signInWithGoogle = async () => {
  const redirectUrl = makeRedirectUri({
    path: "/auth/callback",
  });

  const authResponse = await startAsync({
    authUrl: `${SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${redirectUrl}`,
    returnUrl: redirectUrl,
  });

  if (authResponse.type === "success") {
    supabase.auth.setSession({
      access_token: authResponse.params.access_token,
      refresh_token: authResponse.params.refresh_token,
    });
  }
};

export const Auth = () => {
  return (
    <View className="mt-14">
      <View>
        <Button title="Sign in with Google" onPress={signInWithGoogle} />
      </View>
    </View>
  );
};
