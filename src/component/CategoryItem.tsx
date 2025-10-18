import { Text, TouchableOpacity, View } from "react-native";
import { CategoriesStyles } from "../styles/CategoriesStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routing/stack/navigation";
type NavProp = StackNavigationProp<RootStackParamList, "Home">;

export default function CategoryItem({
  name,
  navigation,
  url,
}: {
  name: string;
  navigation: NavProp;
  url: string;
}) {
  return (
    <TouchableOpacity
      style={CategoriesStyles.catogeryBox}
      onPress={() => navigation.navigate("Category", { url: url })}
    >
      <Text style={CategoriesStyles.title}>{name}</Text>
    </TouchableOpacity>
  );
}
