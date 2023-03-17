import { NavigationProp, useNavigation } from "@react-navigation/native";

export type AuthenticatedNavRoutes = {
  Onboarding: undefined;
  Playground: undefined;
};
export type AuthenticatedNavigation = NavigationProp<AuthenticatedNavRoutes>;

export const useAuthenticatedNavigation = () => {
  const navigation = useNavigation<AuthenticatedNavigation>();
  return navigation;
};
