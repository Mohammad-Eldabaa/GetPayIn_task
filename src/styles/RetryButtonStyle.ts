import { StyleSheet } from "react-native";

export const RetryButtonStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});