import { FC } from "react";
import { View } from "react-native";

type HorizontalGroupProps = {
  children: React.ReactNode;
  className?: string;
};
export const HorizontalGroup: FC<HorizontalGroupProps> = ({
  children,
  className,
}) => {
  return (
    <View className={`flex justify-center w-full ${className}`}>
      {children}
    </View>
  );
};
