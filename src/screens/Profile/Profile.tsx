import { Text } from "react-native";
import { BottomMenu } from "../../components/BottomMenu";
import { FullScreenParent } from "../../components/FullScreenParent/FullScreenParent";

export const Profile = () => {
  return (
    <FullScreenParent>
      <Text>User profile</Text>
      <BottomMenu />
    </FullScreenParent>
  );
};
