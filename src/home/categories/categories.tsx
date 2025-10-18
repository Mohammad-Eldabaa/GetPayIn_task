import { View } from "react-native";
import { CategoriesStyles } from "../../styles/CategoriesStyles";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../calls/fetchCategories";
import IsLoading from "../../component/IsLoading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setCategories } from "../../redux/productsSlice/productSlice";
import { startInactivityTimer } from "../../routing/bottomTabs/restartCountingFun";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routing/stack/navigation";
import { useNavigation } from "@react-navigation/native";
import WelcomeComponent from "../../component/welcomeComponent";
import SectionTitle from "../../component/sectionTitle";
import CategoriesFlatList from "../../component/categoryFlatList";

export type NavProp = StackNavigationProp<RootStackParamList, "Home">;

export default function Categories() {
  const navigation = useNavigation<NavProp>();
  const dispatch = useDispatch();
  const categories = useSelector((store: RootState) => store.products.categories);
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
      <WelcomeComponent />
      <SectionTitle title="Categories" />
      <CategoriesFlatList
        data={data}
        categories={categories}
        navigation={navigation}
      />
    </View>
  );
}
