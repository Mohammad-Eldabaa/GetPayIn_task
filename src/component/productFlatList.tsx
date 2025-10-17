import { FlatList } from "react-native";
import { SingleProduct } from "./singleProduct";
import { productstypes } from "../redux/productsSlice/interfaces";

export const ProductFlatList = ({
  data,
  products,
}: {
  data: productstypes[];
  products: productstypes[];
}) => {
  return (
    <FlatList
      id="proFlatList"
      data={data || products}
      keyExtractor={(_, index) => `pro${index.toString()}`}
      renderItem={({ item }) => (
        <SingleProduct
          title={item?.title}
          brand={item?.brand}
          url={item?.thumbnail}
        />
      )}
    />
  );
};
