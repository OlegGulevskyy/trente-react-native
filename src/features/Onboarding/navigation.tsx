import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HeaderBackButtonProps,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack/lib/typescript/src/types";
import { TouchableOpacity } from "react-native";

import { AccountTypeSelection } from "./screens/AccountTypeSelection";
import { MusicPrefsSelection } from "./screens/MusicPrefsSelection";
import { ArrowBackIcon } from "../../assets/images/arrow-back";
import { TrenteLogoMin } from "../../assets/logos/trente-min";

export const OnboardingNavigator = createNativeStackNavigator();

type ArrowBackProps = HeaderBackButtonProps & {
  onPress: () => void;
};
const ArrowBack = ({ canGoBack, onPress }: ArrowBackProps) => {
  if (!canGoBack) return null;
  return (
    <TouchableOpacity onPress={onPress}>
      <ArrowBackIcon />
    </TouchableOpacity>
  );
};

export const OnboardingNavigation = () => {
  const navigation = useNavigation();
  const headerLeft = (props: HeaderBackButtonProps) => (
    <ArrowBack {...props} onPress={() => navigation.goBack()} />
  );
  const headerLogo = () => <TrenteLogoMin />;
  const headerOptions: NativeStackNavigationOptions = {
    headerLeft,
    headerTitle: headerLogo,
		headerBackground: () => null,
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
