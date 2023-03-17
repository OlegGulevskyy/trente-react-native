import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { makeRedirectUri, startAsync } from "expo-auth-session";

import { supabase, SUPABASE_URL } from "../../lib/supabase";
import { TrenteLogoMin } from "../../assets/logos/trente-min";
import { RobotSvg } from "../../assets/images/robot";
import { HorizontalGroup } from "../../components/HorizontalGroup";
import { ScreenContainer } from "../../components/ScreenContainer";

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

export const Unauthenticated = () => {
  return (
    <ScreenContainer>
      <HorizontalGroup className="mt-14">
        <TrenteLogoMin className="m-auto" />
      </HorizontalGroup>
      <HorizontalGroup className="mt-14">
        <RobotSvg className="m-auto" />
      </HorizontalGroup>
      <Text className="font-primary mt-14">
        <Text className="text-blue-primary text-3xl text-center">
          Discover artists & music around{" "}
          <Text className="text-yellow-primary">you</Text>.
        </Text>
      </Text>
      <HorizontalGroup className="mt-14">
        <TouchableOpacity
          onPress={signInWithGoogle}
          className="bg-blue-primary m-auto rounded-lg p-4 items-center justify-center w-[200]"
        >
          <Text className="text-white font-semibold text-lg">
            Sign in with Google
          </Text>
        </TouchableOpacity>
      </HorizontalGroup>
    </ScreenContainer>
  );
};
