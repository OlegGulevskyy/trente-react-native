import { FC } from "react";
import { View } from "react-native";

type ScreenContainerProps = {
  children: React.ReactNode;
};
export const ScreenContainer: FC<ScreenContainerProps> = ({ children }) => {
  return <View className="mt-14">{children}</View>;
};
