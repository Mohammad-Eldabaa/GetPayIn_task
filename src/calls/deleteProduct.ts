import { APIClient } from "./APIClien";

export const DeleteProduct = async (num: number): Promise<any> => {
  const res = await APIClient.delete(`https://dummyjson.com/products/${num}`);
  console.log(res.data);
  const { id, title, brand, thumbnail, category } = res.data;

  return { id, title, brand, thumbnail, category };
};
