import { FC } from "react";
import { View } from "react-native";

type ScreenContainerProps = {
  children: React.ReactNode;
  className?: string;
};

// @deprecated
// remove this once refactored authentication screen
export const ScreenContainer: FC<ScreenContainerProps> = ({
  children,
  className,
}) => {
  return <View className={`mt-14 ${className ?? ""}`}>{children}</View>;
};
