import { FlatList } from "react-native-gesture-handler";
import CategoryItem from "./CategoryItem";
import Categories, { NavProp } from "../home/categories/categories";
import { categoriesTypes } from "../redux/productsSlice/interfaces";

export default function CategoriesFlatList({
  data,
  categories,
  navigation,
}: {
  data: categoriesTypes[];
  categories: categoriesTypes[];
  navigation: NavProp;
}) {
  return (
    <FlatList
      data={data || categories}
      keyExtractor={(_, index) => `cat${index}`}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      renderItem={({ item }) => (
        <CategoryItem name={item.name} navigation={navigation} url={item.url} />
      )}
    />
  );
}
