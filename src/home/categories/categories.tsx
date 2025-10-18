import { FlatList, TouchableOpacity, View } from "react-native";
import { CategoriesStyles } from "../../styles/CategoriesStyles";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "./fetchCategories";
import IsLoading from "../../component/IsLoading";
import CategoryItem from "../../component/CategoryItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setCategories } from "../../redux/productsSlice/productSlice";
import { startInactivityTimer } from "../../routing/bottomTabs/restartCountingFun";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routing/stack/navigation";
import { useNavigation } from "@react-navigation/native";

type NavProp = StackNavigationProp<RootStackParamList, "Home">;

export default function Categories() {
  const navigation = useNavigation<NavProp>();

  const dispatch = useDispatch();
  const categories = useSelector(
    (store: RootState) => store.products.categories
  );
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  useEffect(() => {
    const startTimer = startInactivityTimer();
    return () => startTimer();
  }, []);

  useEffect(() => {
    !!data && dispatch(setCategories(data));
  }, [data]);

  if (isLoading) return <IsLoading />;
  return (
    <View style={CategoriesStyles.Container}>
      <FlatList
        id="catFlatList"
        data={data || categories}
        keyExtractor={(_, index) => `cat${index}`}
        numColumns={2}
        scrollEnabled={true}
        renderItem={({ item }) => (
          <CategoryItem
            name={item.name}
            navigation={navigation}
            url={item.url}
          />
        )}
      />
    </View>
  );
}
