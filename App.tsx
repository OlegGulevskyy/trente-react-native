import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { StackNavigator } from "./src/stack-navigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <Text>Test</Text>
    </NavigationContainer>
  );
}
