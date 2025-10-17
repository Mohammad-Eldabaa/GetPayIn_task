import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Dimensions } from "react-native";

export const RemoveIcon = () => {
  const { width: W } = Dimensions.get("window");

  return (
    <MaterialIcons
      name="remove-shopping-cart"
      size={W * 0.085}
      color="red"
      style={{ margin: "auto" }}
    />
  );
};
