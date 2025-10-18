import { APIClient } from "./APIClien";

export const fetchCategoryProduct = async (url: string): Promise<any> => {
  const res = await APIClient.get(url);
  console.log(res.data.products);

  return res.data.products.map(({ id, title, brand, thumbnail, category }) => ({
    id,
    title,
    brand,
    thumbnail,
    category,
  }));
};
