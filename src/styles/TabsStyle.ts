import { Dimensions, StyleSheet } from "react-native";
const { width: W } = Dimensions.get("window");

export const TabsSytle = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#0c73abff",
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    height: W * 0.15,
    paddingBottom: 16,
    paddingTop: 8,
    borderRadius: 10,
    margin: 8,
  },

  tabBarLabelStyle: {
    fontSize: W * 0.024,
    fontWeight: "600",
  },
});
