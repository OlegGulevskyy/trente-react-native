import { Text } from "react-native";
import { BottomMenu } from "../../components/BottomMenu";
import { FullScreenParent } from "../../components/FullScreenParent/FullScreenParent";

export const Messages = () => {
  return (
    <FullScreenParent>
      <Text>User messages</Text>
      <BottomMenu />
    </FullScreenParent>
  );
};
