import { StyleSheet } from "react-native";

export const ModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 16,
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  loadingIndicator: {
    marginVertical: 20,
  },
  description: {
    marginVertical: 10,
    color: "gray",
    textAlign: "center",
  },
  errorText: {
    color: "red",
  },
  tryAgainButton: {
    marginTop: 15,
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  tryAgainText: {
    color: "#fff",
  },
});
