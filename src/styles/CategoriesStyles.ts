import { Dimensions, StyleSheet } from "react-native";

const { width: W } = Dimensions.get("window");

export const CategoriesStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
  },
  catogeryBox: {
    borderRadius: 20,
    borderColor: "#0c73abff",
    borderWidth: 1,
    margin: 12,
    height: W * 0.24,
    // width: W * 0.44,
    flex: 1,
    shadowColor: "#3cace8ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 7,
    backgroundColor: "white",
  },
  title: {
    margin: "auto",
    fontSize: W * 0.04,
    fontWeight: "700",
    color: "#0c73abff",
  },
});
