import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { View } from "react-native";
import { TrenteLogoMin } from "../assets/logos/trente-min";
import { ArrowBack } from "../features/Onboarding/components/ArrowBack/ArrowBack";

// App wide header used as a hook that returns different elements
// and used to customize the header per route
type AppHeaderProps = {
  onPressBack?: () => void;
};
type UseAppHeader = (
  props?: AppHeaderProps
) => {
  headerOptions: NativeStackNavigationOptions;
};
export const useAppHeader: UseAppHeader = ({ onPressBack } = {}) => {
  const headerLeft = (props: HeaderBackButtonProps) => (
    <ArrowBack {...props} onPress={onPressBack} />
  );
  const headerLogo = () => <TrenteLogoMin />;
  const headerOptions: NativeStackNavigationOptions = {
    headerLeft,
    headerTitle: headerLogo,
    headerBackground: () => <View className="bg-white h-full w-full" />,
    gestureEnabled: true,
    headerShown: true,
  };

  return { headerOptions };
};
