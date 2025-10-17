import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { productsPageStyles } from "../../styles/productsPageStyles";
import { useQuery } from "@tanstack/react-query";
import IsLoading from "../../component/IsLoading";
import { fetchProducts } from "./fetchProduct";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/productsSlice/productSlice";
import { RootState } from "../../redux/store";
import { ProductFlatList } from "../../component/productFlatList";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((store: RootState) => store.products.products);
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    !!data && dispatch(setProducts(data));
  }, [data]);

  if (isLoading) return <IsLoading />;
  return (
    <View style={productsPageStyles.container}>
      <ProductFlatList data={data} products={products} />
    </View>
  );
}
