import { NavigationProp, useNavigation } from "@react-navigation/native";

export type HomeNavigationRoutes = {
  Onboarding: undefined;
  Playground: undefined;
};
export type HomeNavigation = NavigationProp<HomeNavigationRoutes>;

export const useHomeNavigation = () => {
  const navigation = useNavigation<HomeNavigation>();
  return navigation;
};
