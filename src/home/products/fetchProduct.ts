import { APIClient } from "../../redux/APIClien";

export const fetchProducts = async (): Promise<any> => {
  const res = await APIClient.get("https://dummyjson.com/products");
  console.log(res.data.products);

  return res.data.products.map(({ id, title, brand, thumbnail }) => ({
    id,
    title,
    brand,
    thumbnail,
  }));
};
