import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import { BottomMenu } from "../../components/BottomMenu";
import { FullScreenParent } from "../../components/FullScreenParent/FullScreenParent";

export const Playground = () => {
  const route = useRoute();
  console.log("current screen", route.name);

  return (
    <FullScreenParent>
      <Text>Playground</Text>
      <BottomMenu />
    </FullScreenParent>
  );
};
