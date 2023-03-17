import { Text, TouchableOpacity, View } from "react-native";
import { HorizontalGroup } from "../../../components/HorizontalGroup";
import { OnboardingNavigation } from "../navigation";
import { useOnboardingStore } from "../state";
import { useNavigation } from "@react-navigation/native";
import { OnboardingNavigationProps } from "../types";

export const Onboarding = () => {
  const { accountType } = useOnboardingStore();
  const navigation = useNavigation<OnboardingNavigationProps>();

  const handleContinue = () => {
    navigation.navigate("MusicPreference");
  };

  return (
    <>
      <OnboardingNavigation />
      <View>
        <HorizontalGroup className="mb-12">
          <Text className="text-center mb-2 text-blue-primary">
            Select one of the above to continue
          </Text>
          <TouchableOpacity
            onPress={handleContinue}
            className={`m-auto ${
              !accountType ? "bg-none" : "bg-blue-primary"
            } ${
              !accountType ? "border-gray-300 border-2" : "border-none"
            } p-4 w-[380] rounded-lg align-middle`}
          >
            <Text
              className={`text-center text-lg ${
                !accountType ? "text-blue-primary" : "text-white"
              }`}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </HorizontalGroup>
      </View>
    </>
  );
};
