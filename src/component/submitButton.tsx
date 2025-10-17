import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../styles/LoginStyles";

interface SubmitButtonProps {
  val: string;
  handleSubmit: () => void;
  isSubmitting?: boolean;
}

export default function SubmitButton({
  val,
  handleSubmit,
  isSubmitting,
}: SubmitButtonProps) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSubmit()}
        disabled={isSubmitting}
      >
        <Text style={styles.text}>{isSubmitting ? "Submitting..." : val}</Text>
      </TouchableOpacity>
    </View>
  );
}
