import { useMemo } from "react";
import { View, Text } from "react-native";
import { ONBOARDING_SCREENS_META } from "../../const";

type OnboardingScreenSubheaderProps = {
  routeKey: string;
};
export const OnboardingScreenSubheader = ({
  routeKey,
}: OnboardingScreenSubheaderProps) => {
  const currentScreenMeta = useMemo(() => {
    return ONBOARDING_SCREENS_META.find((screen) => screen.key === routeKey);
  }, [routeKey]);

  return (
    <View className="m-auto mt-14">
      <View className="align-middle">
        <Text className="font-primary text-3xl text-blue-primary">
          {currentScreenMeta.title}
        </Text>
      </View>
      <View className="align-middle">
        <Text className="mt-2 text-blue-primary">
          {currentScreenMeta.description}
        </Text>
      </View>
    </View>
  );
};
