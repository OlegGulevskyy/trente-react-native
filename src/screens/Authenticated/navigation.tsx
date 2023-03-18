import { NavigationProp, useNavigation } from "@react-navigation/native";

export type AuthenticatedNavRoutes = {
  Onboarding: undefined;
  Playground: undefined;
  Home: undefined;
  Profile: undefined;
  History: undefined;
  Messages: undefined;
};
export type AuthenticatedNavigation = NavigationProp<AuthenticatedNavRoutes>;

export const useAuthenticatedNavigation = () => {
  const navigation = useNavigation<AuthenticatedNavigation>();
  return navigation;
};
