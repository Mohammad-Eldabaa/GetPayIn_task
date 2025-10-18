import { productsPageStyles } from "../../styles/productsPageStyles";
import { ProductFlatList } from "../../component/productFlatList";
import { View } from "react-native";
import { fetchCategoryProduct } from "../../calls/fetchCategoryProduct";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../routing/stack/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import IsLoading from "../../component/IsLoading";
import { useEffect, useState } from "react";
import { productstypes } from "../../redux/productsSlice/interfaces";
import { NavProp } from "../categories/categories";
import Toast from "react-native-toast-message";
type CategoryRouteProp = RouteProp<RootStackParamList, "Category">;

export default function SingleCategory() {
  const navigation = useNavigation<NavProp>();
  const { params } = useRoute<CategoryRouteProp>();
  const [categoryTitle, setCategoryTitle] = useState<string>("");
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<productstypes[]>({
    queryKey: ["singleCategory"],
    queryFn: () => fetchCategoryProduct(params.url),
  });

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: ["singleCategory"] });
    };
  }, []);

  useEffect(() => {
    setCategoryTitle(!!data ? data[0]?.category : "");
    navigation.setOptions({
      headerTitle: categoryTitle,
    });
  });

  if (isLoading) return <IsLoading />;
  return (
    <View style={[productsPageStyles.container, { padding: 8 }]}>
      <ProductFlatList data={data} products={data} />
      <Toast />
    </View>
  );
}
