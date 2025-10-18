import { APIClient } from "../../redux/APIClien";

export const fetchUser = async (): Promise<any> => {
  const res = await APIClient.get("https://dummyjson.com/auth/me");
  console.log(res.data);

  const {
    id,
    firstName,
    lastName,
    username,
    age,
    gender,
    email,
    phone,
    image,
  } = res.data;

  return {
    id,
    firstName,
    lastName,
    username,
    age,
    gender,
    email,
    phone,
    image,
  };
};
