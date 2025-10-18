import { StyleSheet } from "react-native";

export const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 8,
    shadowColor: "#007BFF",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },
  profileSection: {
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 4,
    borderColor: "#fff",
  },
  nameContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0c73ab",
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    color: "#3cace8",
    fontStyle: "italic",
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 16,
  },
  detailsSection: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  detailContent: {
    marginLeft: 12,
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: "#0c73ab",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  detailValue: {
    fontSize: 16,
    color: "#1f2937",
    fontWeight: "500",
    marginTop: 2,
  },
  button: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
