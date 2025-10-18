import { FormikErrors, FormikTouched } from "formik";
import Input from "./input";

export default function AuthInputs({
  LoginInitialValues,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  navigation,
}: {
  LoginInitialValues: Record<string, string>;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  values: Record<string, string>;
  errors: FormikErrors<Record<string, string>>;
  touched: FormikTouched<Record<string, string>>;
  navigation: any;
}) {
  return (
    <>
      {Object.keys(LoginInitialValues).map((value, index) => (
        <Input
          key={index}
          type={value}
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values}
          errors={errors}
          touched={touched}
          forgetPassword={value === "password"}
          onForgetPress={() => navigation.navigate("ForgetPassword")}
        />
      ))}
    </>
  );
}
