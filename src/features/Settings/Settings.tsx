import { Text, TouchableOpacity } from "react-native";
import { create } from "zustand";
import { supabase } from "../../lib/supabase";

import { Modal } from "../Modal";

type SettingsState = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};
export const useSettingsState = create<SettingsState>((set) => ({
  isVisible: false,
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
}));

export const Settings = () => {
  const { isVisible, setIsVisible } = useSettingsState();
  const handleSignOut = () => {
    supabase.auth.signOut();
    setIsVisible(false);
  };
  return (
    <Modal
      isVisible={isVisible}
      title="Settings"
      onPressClose={() => setIsVisible(false)}
    >
      <TouchableOpacity
        className="bg-blue-primary p-4 rounded-lg"
        onPress={handleSignOut}
      >
        <Text className="font-coolvetica text-white text-lg text-center">
          Log out from Trente
        </Text>
      </TouchableOpacity>
    </Modal>
  );
};
