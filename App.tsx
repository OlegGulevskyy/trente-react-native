import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">This is gonna be 🔥, LEL</Text>
      <StatusBar style="auto" />
    </View>
  );
}
