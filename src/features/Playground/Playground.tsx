import { Text, View, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-deck-swiper";
import { CheckmarkIcon } from "../../assets/images/checkmark-icon";
import { CrossIcon } from "../../assets/images/cross-icon";
import { BottomMenu } from "../../components/BottomMenu";
import { FullScreenParent } from "../../components/FullScreenParent/FullScreenParent";

const DUMMY_DATA = [
  {
    imageUrl: "https://picsum.photos/500/500/?grayscale",
    title: "First song",
    artist: "First artist",
    trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    imageUrl: "https://picsum.photos/500/500/?grayscale",
    title: "Second song",
    artist: "Second artist",
    trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    imageUrl: "https://picsum.photos/500/500/?grayscale",
    title: "Third song",
    artist: "Third artist",
    trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    imageUrl: "https://picsum.photos/500/500/?grayscale",
    title: "Fourth song",
    artist: "Fourth artist",
    trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    imageUrl: "https://picsum.photos/500/500/?grayscale",
    title: "Fifth song",
    artist: "Fifth artist",
    trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    imageUrl: "https://picsum.photos/500/500/?grayscale",
    title: "Sith song",
    artist: "Sixth artist",
    trackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
];

export const Playground = () => {
  return (
    <FullScreenParent>
      <View />
      <Swiper
        cards={DUMMY_DATA}
        verticalSwipe={false}
        renderCard={(card) => {
          return (
            <View className="flex rounded-lg border-none h-2/3 overflow-hidden p-4 shadow-md">
              <View className="flex justify-center overflow-hidden drop-shadow-lg bg-white">
                <Image
                  source={{ uri: card.imageUrl }}
                  className="block m-auto rounded-tl-lg rounded-tr-lg h-[250] w-full"
                />
                <View className="bg-white">
                  <Text className="text-center text-4xl font-coolvetica mt-8 text-blue-primary">
                    {card.title}
                  </Text>
                  <Text className="text-center text-2xl font-coolvetica text-blue-primary">
                    {card.artist}
                  </Text>
                </View>
              </View>

              <View>
                {/* buttons */}
                <View className="flex flex-row w-full justify-center mb-6 pt-10 bg-white pb-8 rounded-b-lg">
                  <TouchableOpacity
                    className="rounded-full p-4 bg-white"
                    style={{
                      shadowOffset: { height: 0, width: 0 },
                      shadowRadius: 10,
                      shadowColor: "gray",
                      shadowOpacity: 0.3,
                      backgroundColor: "white",
                    }}
                  >
                    <CrossIcon />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="rounded-full p-4 bg-white ml-8"
                    style={{
                      shadowOffset: { height: 0, width: 0 },
                      shadowRadius: 10,
                      shadowColor: "gray",
                      shadowOpacity: 0.2,
                      backgroundColor: "white",
                    }}
                  >
                    <CheckmarkIcon />
                  </TouchableOpacity>
                </View>
              </View>
              {/* </View> */}
            </View>
          );
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        cardIndex={0}
        backgroundColor={"transparent"}
        stackSize={3}
      />
      <BottomMenu />
    </FullScreenParent>
  );
};
