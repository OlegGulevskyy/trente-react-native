import { ImageSourcePropType } from "react-native";
import { AccountType, OnboardingNavigationRoutes } from "./types";

export const ONBOARDING_SCREENS_META: {
  title: string;
  description: string;
  key: keyof OnboardingNavigationRoutes;
}[] = [
  {
    title: "Welcome to Trente",
    description: "Select the best describing you option",
    key: "AccountType",
  },
  {
    title: "What music do you like?",
    description: "We will suggest you music genres based on your choices",
    key: "MusicPreference",
  },
];

export const MUSIC_GENRES = [
  "Rock",
  "Pop",
  "Rap",
  "R&B",
  "Country",
  "Jazz",
  "Electronic",
  "Latin",
  "Reggae",
  "Blues",
  "Classical",
  "Metal",
  "Folk",
  "World",
  "Alternative",
  "Indie",
  "Christian",
  "New Age",
  "Opera",
];

export const ACCOUNT_TYPES: {
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
