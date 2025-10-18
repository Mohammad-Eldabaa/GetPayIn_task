import { Dimensions, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { DeleteProduct } from "../calls/deleteProduct";
import Toast from "react-native-toast-message";
import ShowToast from "./toastMessage";

export const RemoveIcon = ({ Id }: { Id: number }) => {
  const { width: W } = Dimensions.get("window");

  return (
    <TouchableOpacity
      style={{ margin: "auto" }}
      activeOpacity={0.2}
      onPress={() => {
        DeleteProduct(Id);
        console.log("deleted");
        ShowToast({
          type: "success",
          title: "Done",
          body: "The product has delete (simulated)",
        });
      }}
    >
      <AntDesign
        name="delete"
        size={W * 0.06}
        color="red"
        style={{ margin: "auto" }}
      />
    </TouchableOpacity>
  );
};
