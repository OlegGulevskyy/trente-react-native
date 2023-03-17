import { View } from "react-native";
import {
  HeaderBackButtonProps,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack/lib/typescript/src/types";

import { OnboardingNavigator, useOnboardingNavigation } from "../navigation";
import { AccountTypeSelection } from "../screens/AccountTypeSelection";
import { MusicPrefsSelection } from "../screens/MusicPrefsSelection";
import { TrenteLogoMin } from "../../../assets/logos/trente-min";
import { ArrowBack } from "../components/ArrowBack/ArrowBack";

export const Onboarding = () => {
  const navigation = useOnboardingNavigation();
  const headerLeft = (props: HeaderBackButtonProps) => (
    <ArrowBack {...props} onPress={() => navigation.goBack()} />
  );
  const headerLogo = () => <TrenteLogoMin />;
  const headerOptions: NativeStackNavigationOptions = {
    headerLeft,
    headerTitle: headerLogo,
    headerBackground: () => <View className="bg-white h-full w-full" />,
    gestureEnabled: true,
  };

  return (
    <OnboardingNavigator.Navigator screenOptions={headerOptions}>
      <OnboardingNavigator.Screen
        name="AccountType"
        component={AccountTypeSelection}
      />
      <OnboardingNavigator.Screen
        name="MusicPreference"
        component={MusicPrefsSelection}
      />
    </OnboardingNavigator.Navigator>
  );
};
