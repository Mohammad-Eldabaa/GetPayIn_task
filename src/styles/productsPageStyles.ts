import { Dimensions, StyleSheet } from "react-native";

const { width: W, height: H } = Dimensions.get("window");

export const productsPageStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  productBox: {
    borderRadius: 12,
    borderColor: "#0c73abff",
    borderWidth: 1,
    marginTop: 24,
    marginHorizontal: 12,
    padding: 12,
    shadowColor: "#3cace8ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 6,
    backgroundColor: "white",
  },
  productInfoContainer: { display: "flex", flexDirection: "row" },
  imageStyle: { width: W * 0.13, height: W * 0.13, marginHorizontal: 12 },
  title: {
    fontSize: W * 0.038,
    fontWeight: "bold",
    color: "#007BFF",
    width: W * 0.55,
  },
  brand: {
    fontSize: W * 0.028,
    color: "#3cace8ff",
    marginTop: W * 0.012,
  },
  textContainer: { marginVertical: "auto", marginRight: 4 },
});
