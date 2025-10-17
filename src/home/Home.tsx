import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

export default function Home() {
  const { width: W, height: H } = Dimensions.get("window");

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text>How are you</Text>
    </View>
  );
}
