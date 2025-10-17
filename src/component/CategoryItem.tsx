import { Text, View } from "react-native";
import { CategoriesStyles } from "../styles/CategoriesStyles";

export default function CategoryItem({ name }: { name: string }) {
  return (
    <View style={CategoriesStyles.catogeryBox}>
      <Text style={CategoriesStyles.title}>{name}</Text>
    </View>
  );
}
