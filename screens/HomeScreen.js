import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import Stories from "../components/Stories";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Header />
      <Stories />
    </View>
  );
}
