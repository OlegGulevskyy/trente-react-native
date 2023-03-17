import clsx from "clsx";
import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { CancelIcon } from "../../../assets/images/cancel-icon";
import { SearchIcon } from "../../../assets/images/search-icon";
import { useUser } from "../../../hooks/useUser";
import { AuthenticatedNavigation } from "../../../screens/Authenticated/navigation";
import { BottomButton } from "../components/BottomButton/ButtomButton";
import { OnboardingScreenSubheader } from "../components/OnboardingScreenSubheader";
import { MUSIC_GENRES } from "../const";
import { saveOnboardingData } from "../logic";
import { useOnboardingStore } from "../state";
import { OnboardingScreenProps } from "../types";

export const MusicPrefsSelection = ({
  route,
  navigation,
}: OnboardingScreenProps) => {
  const [input, setInput] = useState("");
  const {
    selectedGenres,
    setSelectedGenres,
    accountType,
  } = useOnboardingStore();
  const [isFocused, setIsFocused] = useState(false);
  const [genres, setGenres] = useState(MUSIC_GENRES);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();

  const finishOnboarding = async () => {
    setIsLoading(true);
    const saved = await saveOnboardingData(user, {
      accountType,
      selectedGenres,
    });
    if (saved) {
      const parent = navigation.getParent<AuthenticatedNavigation>();
      parent?.navigate("Playground");
    }
    setIsLoading(false);
  };

  const filterItems = (query: string) => {
    return MUSIC_GENRES.filter((el) =>
      el.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleInput = (value: string) => {
    setInput(value);
    const filtered = filterItems(value);
    setGenres(filtered);
  };

  const handleResetInput = () => {
    setGenres(MUSIC_GENRES);
    setInput("");
  };

  const handleSelectedGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      return setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    }
    return setSelectedGenres([...selectedGenres, genre]);
  };

  return (
    <View className="flex flex-col justify-between h-full">
      <View>
        <OnboardingScreenSubheader routeKey={route.name} />
        <View className="mt-12 w-[380]">
          <View
            className={clsx(
              "ml-8 flex-row p-4",
              isFocused ? "border-blue-primary" : "border-gray-200",
              "border-2 rounded-lg relative"
            )}
          >
            <SearchIcon />
            <TextInput
              className="ml-4 text-blue-primary font-primary"
              placeholder="Search for music style"
              value={input}
              onChangeText={handleInput}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {Boolean(input) && (
              <TouchableOpacity
                className="absolute top-3 right-4"
                onPress={handleResetInput}
              >
                <CancelIcon className="text-blue-primary" width={20} />
              </TouchableOpacity>
            )}
          </View>
          <SafeAreaView className="ml-8 h-80 mt-6">
            <ScrollView
              contentContainerStyle={{
                justifyContent: "space-between",
                flexDirection: "row",
                flexWrap: "wrap",
                flexGrow: 1,
              }}
            >
              {genres.map((genre, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => handleSelectedGenre(genre)}
                >
                  <View
                    className={clsx(
                      "p-4 border-gray-200 border-2 w-[105] rounded-lg m-1",
                      selectedGenres.includes(genre) ? "bg-blue-primary" : ""
                    )}
                  >
                    <Text
                      className={clsx(
                        "text-center whitespace-nowrap text-xs",
                        selectedGenres.includes(genre)
                          ? "text-white"
                          : "text-black"
                      )}
                    >
                      {genre}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
      <View className="mb-12">
        <BottomButton
          isLoading={isLoading}
          isActive={Boolean(selectedGenres.length)}
          onPress={finishOnboarding}
          text="Start listening"
          label="You can always change your preferences later"
        />
      </View>
    </View>
  );
};
