import { StyleSheet } from "react-native";

export const TabsSytle = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#0c73abff",
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    height: 60,
    paddingBottom: 16,
    paddingTop: 8,
    borderRadius: 10,
    margin: 8,
  },

  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "600",
  },
});
