import { APIClient } from "../../redux/APIClien";

export const fetchCategories = async (): Promise<any> => {
  const res = await APIClient.get("https://dummyjson.com/products/categories");
  console.log(res.data);

  return res.data;
};
