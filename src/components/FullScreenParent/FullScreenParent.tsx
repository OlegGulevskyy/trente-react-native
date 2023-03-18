import { View } from "react-native";

export const FullScreenParent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <View className="h-full flex flex-col justify-between">{children}</View>
  );
};
