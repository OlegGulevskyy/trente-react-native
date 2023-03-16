import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CancelIcon } from "../../assets/images/cancel-icon";
import { SearchIcon } from "../../assets/images/search-icon";
import { CurrentScreenProps } from "./types";

const musicGenres = [
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

type MusicPrefsSelectionProps = Pick<
  CurrentScreenProps,
  "selectedGenres" | "setSelectedGenres"
>;
export const MusicPrefsSelection = ({
  selectedGenres,
  setSelectedGenres,
}: MusicPrefsSelectionProps) => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [genres, setGenres] = useState(musicGenres);

  const filterItems = (query: string) => {
    return musicGenres.filter((el) =>
      el.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleInput = (value: string) => {
    setInput(value);
    const filtered = filterItems(value);
    setGenres(filtered);
  };

  const handleResetInput = () => {
    setGenres(musicGenres);
    setInput("");
  };

  const handleSelectedGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      return setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    }
    return setSelectedGenres([...selectedGenres, genre]);
  };

  return (
    <View className="mt-12 w-[380]">
      <View
        className={`ml-8 flex-row p-4 ${
          isFocused ? "border-blue-primary" : "border-gray-200"
        } border-2 rounded-lg relative`}
      >
        <SearchIcon />
        <TextInput
          className={`ml-4 text-blue-primary font-primary`}
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
                className={`p-4 border-gray-200 border-2 w-[105] rounded-lg m-1 ${
                  selectedGenres.includes(genre) ? "bg-blue-primary" : ""
                }`}
              >
                <Text
                  className={`text-center whitespace-nowrap text-xs ${
                    selectedGenres.includes(genre) ? "text-white" : "text-black"
                  }`}
                >
                  {genre}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
