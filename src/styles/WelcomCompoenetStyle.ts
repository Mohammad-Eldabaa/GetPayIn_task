import { Dimensions, StyleSheet } from "react-native";
const { width: W } = Dimensions.get("window");

export const WelcomeComponentStyle = StyleSheet.create({
  container: {
    margin: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  WelcomMessage: {
    fontSize: 0.06 * W,
    color: "#066193ff",
    fontWeight: "500",
  },
  onlineViweContainer: {
    borderRadius: "50%",
    marginVertical: "auto",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 16,
    elevation: 10,
  },
  onlineView: {
    width: W * 0.05,
    height: W * 0.05,
    borderRadius: "50%",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 16,
    elevation: 10,
  },
});
