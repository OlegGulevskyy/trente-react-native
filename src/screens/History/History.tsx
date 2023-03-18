import { Text } from "react-native";
import { BottomMenu } from "../../components/BottomMenu";
import { FullScreenParent } from "../../components/FullScreenParent/FullScreenParent";

export const History = () => {
  return (
    <FullScreenParent>
      <Text>Match history</Text>
      <BottomMenu />
    </FullScreenParent>
  );
};
