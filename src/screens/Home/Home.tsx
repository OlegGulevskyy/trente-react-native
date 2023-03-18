import { View, Text } from "react-native";
import { BottomMenu } from "../../components/BottomMenu";
import { FullScreenParent } from "../../components/FullScreenParent/FullScreenParent";

export const Home = () => {
  return (
    <FullScreenParent>
      <Text>User home - some feed or some shit</Text>
      <BottomMenu />
    </FullScreenParent>
  );
};
