import { productsPageStyles } from "../../styles/productsPageStyles";
import { ProductFlatList } from "../../component/productFlatList";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { fetchCategoryProduct } from "./fetchCategoryProduct";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../routing/stack/navigation";
import { productstypes } from "../../redux/productsSlice/interfaces";
type CategoryRouteProp = RouteProp<RootStackParamList, "Category">;

export default function SingleCategory() {
  const { params } = useRoute<CategoryRouteProp>();
  const [products, setProdcuts] = useState<productstypes[]>();
  const fn = async () => {
    const data = await fetchCategoryProduct(params.url);
    setProdcuts(data);
  };
  useEffect(() => {
    fn();
  }, []);
  return (
    <View style={[productsPageStyles.container, { padding: 8 }]}>
      <ProductFlatList data={products} products={products} />
    </View>
  );
}
