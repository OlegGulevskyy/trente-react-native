import clsx from "clsx";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { HorizontalGroup } from "../../../../components/HorizontalGroup";

type BottomButtonProps = {
  isActive: boolean;
  onPress: () => void;
  label?: string;
  text: string;
  isLoading?: boolean;
};
export const BottomButton = ({
  label,
  onPress,
  text,
  isActive,
  isLoading,
}: BottomButtonProps) => {
  return (
    <View>
      <HorizontalGroup>
        <Text className="text-center mb-2 text-blue-primary">{label}</Text>
        <TouchableOpacity
          onPress={onPress}
          disabled={!isActive || isLoading}
          className={clsx(
            "m-auto",
            !isActive ? "bg-none" : "bg-blue-primary",
            !isActive ? "border-gray-300 border-2" : "border-none",
            "p-4 w-[380] rounded-lg align-middle"
          )}
        >
          <View className="flex flex-row justify-center">
            {isLoading && (
              <ActivityIndicator
                size="small"
                color={isActive ? "white" : "#284B63"}
                className="mr-4"
              />
            )}
            <Text
              className={`text-center text-lg ${
                !isActive ? "text-blue-primary" : "text-white"
              }`}
            >
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      </HorizontalGroup>
    </View>
  );
};
