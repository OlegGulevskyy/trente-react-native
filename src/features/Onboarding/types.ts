import { NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AccountType = "artist" | "pro" | "fan";
export type CurrentScreenProps = {
  index: number;
  accountType: AccountType;
  setAccountType: (type: AccountType) => void;
  selectedGenres: string[];
  setSelectedGenres: (genres: string[]) => void;
};

export type OnboardingStore = {
  accountType: AccountType | null;
  setAccountType: (type: AccountType) => void;
  selectedGenres: string[];
  setSelectedGenres: (genres: string[]) => void;
};

export type OnboardingNavigationRoutes = {
  AccountType: undefined;
  MusicPreference: undefined;
};

export type OnboardingScreenProps = NativeStackScreenProps<OnboardingNavigationRoutes>;

export type OnboardingNavigationProps = NavigationProp<OnboardingNavigationRoutes>;
