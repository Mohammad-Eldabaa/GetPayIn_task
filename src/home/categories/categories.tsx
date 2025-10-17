import { FlatList, View } from "react-native";
import { CategoriesStyles } from "../../styles/CategoriesStyles";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "./fetchCategories";
import IsLoading from "../../component/IsLoading";
import CategoryItem from "../../component/CategoryItem";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { RootStackParamList } from "../../routing/stack/navigation";

export default function Categories() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  //   useEffect(() => {
  //     const axiosError = error as AxiosError;
  //     if (axiosError?.response?.status === 401) {
  //       navigation.navigate("Login");
  //     }
  //   }, [error]);
  if (isLoading) return <IsLoading />;

  return (
    <View style={CategoriesStyles.Container}>
      <FlatList
        id="catFlatList"
        data={data}
        keyExtractor={(_, index) => `cat${index}`}
        renderItem={({ item }) => <CategoryItem name={item.name} />}
        numColumns={2}
        scrollEnabled={true}
      />
    </View>
  );
}
