import { useNavigation } from "@react-navigation/native";
import clsx from "clsx";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { BottomButton } from "../components/BottomButton/ButtomButton";

import { OnboardingScreenSubheader } from "../components/OnboardingScreenSubheader";
import { ACCOUNT_TYPES } from "../const";
import { useOnboardingStore } from "../state";
import { OnboardingNavigationProps, OnboardingScreenProps } from "../types";

const AccountTypeCard = ({
  title,
  description,
  icon: icon,
  onSelect,
  isSelected,
}: {
  title: string;
  description: string;
  icon: ImageSourcePropType;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <View className="flex rounded-lg mt-4">
      <TouchableOpacity
        onPress={onSelect}
        className={clsx(
          "m-auto flex flex-row rounded-2xl py-4 px-4 border-2 border-gray-300 w-[380]",
          isSelected && "bg-blue-primary"
        )}
      >
        <View>
          <Image source={icon} className="m-auto" />
        </View>
        <View className="ml-5">
          <Text
            className={clsx(
              "font-coolvetica text-2xl",
              isSelected ? "text-white" : "text-gray-600"
            )}
          >
            {title}
          </Text>
          <Text
            className={clsx(
              "font-primary text-md  w-[275]",
              isSelected ? "text-white" : "text-gray-800"
            )}
          >
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const AccountTypeSelection = ({ route }: OnboardingScreenProps) => {
  const { accountType, setAccountType } = useOnboardingStore();
  const navigation = useNavigation<OnboardingNavigationProps>();

  return (
    <View className="flex flex-col h-full justify-between">
      <View>
        <OnboardingScreenSubheader routeKey={route.name} />

        <View className="mt-12">
          {ACCOUNT_TYPES.map((accType) => (
            <AccountTypeCard
              key={accType.key}
              title={accType.title}
              description={accType.description}
              icon={accType.icon}
              isSelected={accType.key === accountType}
              onSelect={() => setAccountType(accType.key)}
            />
          ))}
        </View>
      </View>

      <View className="mb-12">
        <BottomButton
          isActive={Boolean(accountType)}
          onPress={() => navigation.navigate("MusicPreference")}
          text="Continue"
          label="Select one of the above to continue"
        />
      </View>
    </View>
  );
};
