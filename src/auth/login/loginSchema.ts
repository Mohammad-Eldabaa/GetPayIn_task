import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup
    .string()
    .min(3, "please enter valid user name")
    .required("please enter your email"),
  password: yup
    .string()
    .min(6, "The password must be at least 6 character")
    .required("Please enter the password"),
});

export const LoginInitialValues: Record<string, string> = {
  username: "",
  password: "",
};
