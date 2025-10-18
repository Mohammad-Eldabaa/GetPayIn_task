import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { RetryButtonStyle } from "../styles/RetryButtonStyle";

export default function RetryButton({
  onPress,
  text = "Retry",
}: {
  onPress: () => void;
  text?: string;
}) {
  return (
    <View style={RetryButtonStyle.container}>
      <TouchableOpacity
        style={RetryButtonStyle.button}
        onPress={onPress}
        activeOpacity={0.2}
      >
        <MaterialIcons
          name="refresh"
          size={20}
          color="#fff"
          style={RetryButtonStyle.icon}
        />
        <Text style={RetryButtonStyle.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}


