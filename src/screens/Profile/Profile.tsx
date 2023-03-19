import { Button, Text, View } from "react-native";
import { FullScreenParent } from "../../components/FullScreenParent/FullScreenParent";
import { supabase } from "../../lib/supabase";

export const Profile = () => {
  return (
    <FullScreenParent>
      <View>
        <Text>User profile</Text>
        <Text>Debuggin log out button</Text>
        <Button onPress={() => supabase.auth.signOut()} title="Log out" />
      </View>
    </FullScreenParent>
  );
};
