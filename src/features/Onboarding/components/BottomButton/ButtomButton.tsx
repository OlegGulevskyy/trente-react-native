import clsx from "clsx";
import { View, Text, TouchableOpacity } from "react-native";
import { HorizontalGroup } from "../../../../components/HorizontalGroup";

type BottomButtonProps = {
  isActive: boolean;
  onPress: () => void;
  label?: string;
  text: string;
};
export const BottomButton = ({
  label,
  onPress,
  text,
  isActive,
}: BottomButtonProps) => {
  return (
    <View>
      <HorizontalGroup>
        <Text className="text-center mb-2 text-blue-primary">{label}</Text>
        <TouchableOpacity
          onPress={onPress}
					disabled={!isActive}
          className={clsx(
            "m-auto",
            !isActive ? "bg-none" : "bg-blue-primary",
            !isActive ? "border-gray-300 border-2" : "border-none",
            "p-4 w-[380] rounded-lg align-middle"
          )}
        >
          <Text
            className={`text-center text-lg ${
              !isActive ? "text-blue-primary" : "text-white"
            }`}
          >
            {text}
          </Text>
        </TouchableOpacity>
      </HorizontalGroup>
    </View>
  );
};
