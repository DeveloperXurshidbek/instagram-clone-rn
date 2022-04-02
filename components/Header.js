import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import instagramLogo from "../assets/instagram-logo.png";
import msg from "../assets/messenger.png";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
      }}
    >
      <Image source={instagramLogo} style={{ width: 120, height: 40 }} />
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => navigation.navigate("Chat")}
      >
        <Image source={msg} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
    </View>
  );
}
