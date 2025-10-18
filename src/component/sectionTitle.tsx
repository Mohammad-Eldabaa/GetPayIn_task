import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: "linear-gradient(135deg, #ffffff 0%, #f5f0ff 100%)",
    marginVertical: 16,
    marginHorizontal: 12,
    borderLeftWidth: 0,
    borderLeftColor: "#3cace8ff",
    borderRadius: 12,
    shadowColor: "#3cace8ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#51dacfff",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default function SectionTitle({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
