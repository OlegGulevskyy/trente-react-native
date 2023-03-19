import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import clsx from "clsx";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";

import { HistoryIcon } from "../../assets/images/history-icon";
import { HomeIcon } from "../../assets/images/home-icon";
import { LightEffectIcon } from "../../assets/images/light-effect-icon";
import { MessagesIcon } from "../../assets/images/messages-icon";
import { PlayIcon } from "../../assets/images/play-icon";
import { PersonIcon } from "../../assets/images/profile-icon";

const MAIN_BUTTON_WIDTH = 96;
const ICON_SIZE = 30;
// RN does not support translate-1/2 so we have to hard code the value
// in order to absolute middle position
const LIGHT_EFFECT_SVG_WIDTH = 44;

const RegularButton = ({
  icon,
  label,
  isActive,
  onPress,
}: {
  icon: (props: SvgProps) => JSX.Element;
  label: string;
  isActive?: boolean;
  onPress: () => void;
}) => {
  const Icon = icon;
  return (
    <TouchableOpacity
      onPress={onPress}
      className="relative flex justify-center"
    >
      {isActive && (
        <LightEffectIcon
          className={clsx("absolute right-1/2", `top-0`)}
          style={{ transform: [{ translateX: LIGHT_EFFECT_SVG_WIDTH / 2 }] }}
          width={LIGHT_EFFECT_SVG_WIDTH}
        />
      )}
      <Icon
        width={ICON_SIZE}
        height={ICON_SIZE}
        className={clsx(
          isActive ? "text-yellow-lighter" : "text-white",
          "mx-auto -mt-2"
        )}
      />
      <Text
        className={clsx(
          isActive ? "text-yellow-lighter" : "text-white",
          "font-coolvetica text-lg"
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export const BottomMenu = ({ navigation, state }: BottomTabBarProps) => {
  const currentIndex = state.index;
  const isActive = (route: string) => state.routes[currentIndex].name === route;

  if (state.routes[currentIndex].name === "Onboarding") {
    return null;
  }

  return (
    <View className="flex flex-row bg-blue-primary h-[100] justify-between px-6 relative">
      <RegularButton
        onPress={() => navigation.navigate("Home")}
        isActive={isActive("Home")}
        icon={HomeIcon}
        label="Home"
      />
      <RegularButton
        isActive={isActive("History")}
        onPress={() => navigation.navigate("History")}
        icon={HistoryIcon}
        label="History"
      />

      {/* placeholder for main button so that the actual button with absolute */}
      {/* position is centered and not shifted the layout */}
      <View className={`w-${ICON_SIZE} h-${ICON_SIZE}`} />
      <View
        className="absolute -top-1/2"
        style={{
          left: Dimensions.get("window").width / 2 - MAIN_BUTTON_WIDTH / 2,
        }}
      >
        <TouchableOpacity
          className="bg-blue-primary rounded-full p-3"
          onPress={() => navigation.navigate("Playground")}
        >
          <View className="bg-yellow-primary rounded-full p-4">
            <PlayIcon height={40} width={40} className="text-white" />
          </View>
        </TouchableOpacity>
      </View>

      <RegularButton
        isActive={isActive("Messages")}
        onPress={() => navigation.navigate("Messages")}
        icon={MessagesIcon}
        label="Messages"
      />
      <RegularButton
        isActive={isActive("Profile")}
        onPress={() => navigation.navigate("Profile")}
        icon={PersonIcon}
        label="Profile"
      />
    </View>
  );
};
