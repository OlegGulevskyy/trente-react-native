import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { AccountType, CurrentScreenProps } from "./types";

const accountTypes: {
  title: string;
  description: string;
  icon: ImageSourcePropType;
  key: AccountType;
}[] = [
  {
    title: "Artist",
    description: "You create and perform original music",
    icon: require("../../assets/images/artist-icon.png"),
    key: "artist",
  },
  {
    title: "Professional",
    description: "You look for artist for professional purposes",
    icon: require("../../assets/images/pro-icon.png"),
    key: "pro",
  },
  {
    title: "Fan",
    description: "You want to discover artists and listen to music",
    icon: require("../../assets/images/fan-icon.png"),
    key: "fan",
  },
];

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
        className={`m-auto flex flex-row rounded-2xl py-4 px-4 border-2 border-gray-300 w-[380] ${
          isSelected && "bg-blue-primary"
        }`}
      >
        <View>
          <Image source={icon} className="m-auto" />
        </View>
        <View className="ml-5">
          <Text
            className={`font-coolvetica text-2xl ${
              isSelected ? "text-white" : "text-gray-600"
            }`}
          >
            {title}
          </Text>
          <Text
            className={`font-primary text-md  w-[275] ${
              isSelected ? "text-white" : "text-gray-800"
            }`}
          >
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

type AccountTypeSelectionProps = Pick<
  CurrentScreenProps,
  "accountType" | "setAccountType"
>;
export const AccountTypeSelection = ({
  accountType,
  setAccountType,
}: AccountTypeSelectionProps) => {
  console.log("rendering account type selectionn");
  return (
    <View className="mt-12">
      {accountTypes.map((accType) => (
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
  );
};
