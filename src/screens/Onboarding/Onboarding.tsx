import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TrenteLogoMin } from "../../assets/logos/trente-min";
import { HorizontalGroup } from "../../components/HorizontalGroup";
import { ScreenContainer } from "../../components/ScreenContainer";
import { AccountTypeSelection } from "./AccountTypeSelection";
import { MusicPrefsSelection } from "./MusicPrefsSelection";
import { AccountType, CurrentScreenProps } from "./types";

const onboardingScreens = [
  {
    component: AccountTypeSelection,
    title: "Welcome to Trente",
    description: "Select the best describing you option",
    key: "accountType",
  },
  {
    component: MusicPrefsSelection,
    title: "What music do you like?",
    description: "We will suggest you music genres based on your choices",
    key: "musicPrefs",
  },
] as const;

type OnboardingScreenKeys = typeof onboardingScreens[number]["key"];

const CurrentOnboardingScreen = ({ index, ...props }: CurrentScreenProps) => {
  const Component = onboardingScreens[index].component;
  return <Component {...props} />;
};

export const Onboarding = ({}) => {
  const [screenIndex, setScreenIndex] = useState(0);
  const [accountType, setAccountType] = useState<AccountType | null>(null);

  const changeScreenTo = (screenKey: OnboardingScreenKeys) => {
    const index = onboardingScreens.findIndex((s) => s.key === screenKey);
    setScreenIndex(index);
  };

  return (
    <ScreenContainer className="flex-col justify-between h-screen">
      <View>
        <View>
          <HorizontalGroup>
            <TrenteLogoMin className="m-auto" />
          </HorizontalGroup>
        </View>

        <View className="m-auto mt-14">
          <View className="align-middle">
            <Text className="font-primary text-3xl text-blue-primary">
              {onboardingScreens[screenIndex].title}
            </Text>
          </View>
          <View className="align-middle">
            <Text className="mt-2 text-blue-primary">
              {onboardingScreens[screenIndex].description}
            </Text>
          </View>
        </View>

        <CurrentOnboardingScreen
          index={screenIndex}
          accountType={accountType}
          setAccountType={setAccountType}
        />
      </View>

      <View>
        <HorizontalGroup className="mb-28">
          <Text className="text-center mb-2 text-blue-primary">
            Select one of the above to continue
          </Text>
          <TouchableOpacity
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
    </ScreenContainer>
  );
};
