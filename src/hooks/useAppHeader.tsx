import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { TouchableOpacity, View } from "react-native";
import { GearIcon } from "../assets/images/gear-icon";
import { TrenteLogoMin } from "../assets/logos/trente-min";
import { ArrowBack } from "../features/Onboarding/components/ArrowBack/ArrowBack";
import { useSettingsState } from "../features/Settings/Settings";

// App wide header used as a hook that returns different elements
// and used to customize the header per route
type AppHeaderProps = {
  onPressBack?: () => void;
};
type UseAppHeader = <
  T extends NativeStackNavigationOptions | BottomTabNavigationOptions
>(
  props?: AppHeaderProps
) => {
  headerOptions: T;
};
export const useAppHeader: UseAppHeader = ({ onPressBack } = {}) => {
  const { setIsVisible } = useSettingsState();
  const headerLeft = (props: HeaderBackButtonProps) => (
    <ArrowBack {...props} onPress={onPressBack} />
  );
  const arrowBack = () => {
    return (
      <TouchableOpacity className="mr-8" onPress={() => setIsVisible(true)}>
        <GearIcon />
      </TouchableOpacity>
    );
  };
  const headerLogo = () => <TrenteLogoMin />;
  const headerOptions = {
    headerLeft,
    headerRight: arrowBack,
    headerTitle: headerLogo,
    headerBackground: () => <View className="bg-white h-full w-full" />,
    gestureEnabled: true,
    headerShown: true,
  };

  return { headerOptions };
};
