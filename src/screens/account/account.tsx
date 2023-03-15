import { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import { Button, Text } from "react-native";
import { Session } from "@supabase/supabase-js";

import { ScreenContainer } from "../../components/ScreenContainer";
import { supabase, Database } from "../../lib/supabase";

type PartialAccount = Pick<
  Database["public"]["Tables"]["Users"]["Row"],
  "name" | "picture"
>;

export const Account = ({ session }: { session: Session }) => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<PartialAccount | null>(null);

  console.log("account", account);

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      let { data, error, status } = await supabase
        .from("Users")
        .select(`name, picture`)
        .eq("googleId", session?.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAccount(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScreenContainer>
      <View>
        <Text>Hello, {account?.name}</Text>
        <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
      </View>
    </ScreenContainer>
  );
};
