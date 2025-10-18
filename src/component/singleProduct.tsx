import { Image, Text, View } from "react-native";
import { productsPageStyles } from "../styles/productsPageStyles";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { RemoveIcon } from "./removeIcon";

export function SingleProduct({
  title,
  brand,
  url,
}: {
  title: string;
  brand: string;
  url: string;
}) {
  const user = useSelector((store: RootState) => store.auth.user);

  return (
    <View style={productsPageStyles.productBox}>
      <View style={productsPageStyles.productInfoContainer}>
        <Image source={{ uri: url }} style={productsPageStyles.imageStyle} />
        <View style={productsPageStyles.textContainer}>
          <Text style={productsPageStyles.title}>{title}</Text>
          <Text style={productsPageStyles.brand}>{brand}</Text>
        </View>
        {user?.username === "avat" && <RemoveIcon />}
      </View>
    </View>
  );
}
