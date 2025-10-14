import React from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardTypeOptions,
} from "react-native";
import { FormikErrors, FormikHandlers, FormikTouched } from "formik";
import { styles } from "../auth/login/style";

interface FormValues {
  username: string;
  password: string;
}

type InputType = keyof FormValues;

interface InputProps {
  type: string;
  values: Record<string, string>;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  forgetPassword?: boolean;
  onForgetPress?: () => void;
}

const content: Record<
  InputType,
  {
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    autoCapitalize?: "none" | "sentences" | "words";
  }
> = {
  username: {
    placeholder: "Uesr name",
    keyboardType: "default",
    autoCapitalize: "none",
  },
  password: {
    placeholder: "Password",
    secureTextEntry: true,
    autoCapitalize: "none",
  },
};

export default function Input({
  touched,
  errors,
  type,
  values,
  handleChange,
  handleBlur,
  forgetPassword,
  onForgetPress,
}: InputProps) {
  const config = content[type];

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={config.placeholder}
        keyboardType={config.keyboardType || "default"}
        autoCapitalize={config.autoCapitalize || "sentences"}
        secureTextEntry={config.secureTextEntry || false}
        onChangeText={handleChange(type)}
        onBlur={handleBlur(type)}
        value={values[type] || ""}
      />

      {touched[type] && errors[type] && (
        <Text style={styles.error}>{errors[type] as string}</Text>
      )}

      {forgetPassword && type === "password" && (
        <TouchableOpacity onPress={onForgetPress}>
          <Text style={styles.forgetPassword}>Forget Password?</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
