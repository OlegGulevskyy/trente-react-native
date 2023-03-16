import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountTypeSelection } from "./AccountTypeSelection";
import { MusicPrefsSelection } from "./MusicPrefsSelection";

const Onboarding = createNativeStackNavigator();

export const OnboardingNavigation = () => {
  return (
    <Onboarding.Navigator
      initialRouteName="Type"
      screenOptions={{ headerShown: false }}
    >
      <Onboarding.Screen name="Type" component={AccountTypeSelection} />
      <Onboarding.Screen
        name="Preferences"
        component={MusicPrefsSelection}
      />
    </Onboarding.Navigator>
  );
};
