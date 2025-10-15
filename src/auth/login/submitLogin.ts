import { Alert } from "react-native";
import { APIClient } from "../../redux/APIClien";
import { setToken, setUser } from "../../redux/slice";
import { FormikState } from "formik";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

interface submitLoginProps {
  values: Record<string, string>;
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: (nextState?: Partial<FormikState<Record<string, string>>>) => void;
  dispatch: Dispatch<UnknownAction>;
  navigation: any;
}

export async function submitLogin({
  values,
  dispatch,
  setSubmitting,
  resetForm,
  navigation,
}: submitLoginProps) {
  try {
    setSubmitting(true);
    const response = await APIClient.post("/auth/login", {
      username: values.username,
      password: values.password,
      expiresInMins: 3,
    });

    console.log("Login response:", response.data);
    const res = response.data;
    const { id, username, firstName, lastName, email, image } = res;
    if (response.data?.accessToken) {
      dispatch(setToken(res.accessToken));
      dispatch(setUser({ id, username, firstName, lastName, email, image }));
    }

    navigation.navigate("Home");
    resetForm();
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";
    showAlert("Login Error", errorMessage);
  } finally {
    setSubmitting(false);
  }
}

const showAlert = (title: string, message: string) => {
  Alert.alert(title, message);
};
