import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingNavigationProps } from "./types";
export const OnboardingNavigator = createNativeStackNavigator();

export const useOnboardingNavigation = () => {
  return useNavigation<OnboardingNavigationProps>();
};
