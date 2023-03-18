import { useRoute } from "@react-navigation/native";
import clsx from "clsx";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";
import { HistoryIcon } from "../../assets/images/history-icon";
import { HomeIcon } from "../../assets/images/home-icon";
import { LightEffectIcon } from "../../assets/images/light-effect-icon";
import { MessagesIcon } from "../../assets/images/messages-icon";
import { PlayIcon } from "../../assets/images/play-icon";
import { PersonIcon } from "../../assets/images/profile-icon";
import { useAuthenticatedNavigation } from "../../screens/Authenticated/navigation";

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
          className={clsx(
            "absolute left-1/2",
            `-translate-x-[${LIGHT_EFFECT_SVG_WIDTH / 2}px] top-0`
          )}
          width={LIGHT_EFFECT_SVG_WIDTH}
        />
      )}
      <Icon
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="text-white mx-auto -mt-2"
      />
      <Text
        className={clsx(
          isActive ? "text-yellow-primary" : "text-white",
          "font-coolvetica text-lg"
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export const BottomMenu = () => {
  const { name } = useRoute();
  const navigation = useAuthenticatedNavigation();

  return (
    <View className="flex flex-row bg-blue-primary h-[100] justify-between px-6 relative">
      <RegularButton
        onPress={() => navigation.navigate("Home")}
        isActive={name === "Home"}
        icon={HomeIcon}
        label="Home"
      />
      <RegularButton
        isActive={name === "History"}
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
        isActive={name === "Messages"}
        onPress={() => navigation.navigate("Messages")}
        icon={MessagesIcon}
        label="Messages"
      />
      <RegularButton
        isActive={name === "Profile"}
        onPress={() => navigation.navigate("Profile")}
        icon={PersonIcon}
        label="Profile"
      />
    </View>
  );
};
