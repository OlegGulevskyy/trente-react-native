import { Text, View } from "react-native";
import { RobotSvg } from "../../assets/images/robot";
import { FullScreenParent } from "../FullScreenParent/FullScreenParent";

export const LoadingPlaceholder = () => {
  return (
    <FullScreenParent>
      <View className="m-auto">
        <RobotSvg />
        <Text className="text-center text-3xl text-blue-primary font-coolvetica mt-6">
          Working...
        </Text>
      </View>
    </FullScreenParent>
  );
};
