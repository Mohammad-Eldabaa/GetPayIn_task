import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Formik } from "formik";
import Input from "../../component/input";
import { LoginInitialValues, loginSchema } from "./loginSchema";
import SubmitButton from "../../component/submitButton";
import { submitLogin } from "./submitLogin";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../../redux/store";
import { isTokenExpire } from "../../redux/APIClien";
import { styles } from "./style";
import BiometricUnlockModal from "../bio_integration/BiometricUnlockModal";

export const LoginPage = ({ navigation }: any) => {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.auth.user);

  useEffect(() => {
    const token = store.getState().auth.token;
    if (!isTokenExpire(token)) {
      navigation.navigate("Home");
    }
  }, []);

  return (
    <>
      {!visible ? (
        <KeyboardAwareScrollView
          contentContainerStyle={{ flex: 1 }}
          enableOnAndroid={true}
          extraScrollHeight={8}
        >
          <View style={styles.container}>
            <Formik
              initialValues={LoginInitialValues}
              validationSchema={loginSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                submitLogin({
                  values,
                  dispatch,
                  setSubmitting,
                  resetForm,
                  navigation,
                });
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <View>
                  <Text style={styles.title}>Login</Text>
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
                      onForgetPress={() =>
                        navigation.navigate("ForgetPassword")
                      }
                    />
                  ))}
                  <SubmitButton
                    isSubmitting={isSubmitting}
                    handleSubmit={handleSubmit}
                    val={"login"}
                  />
                  {user && (
                    <SubmitButton
                      val={"Biometric unlock"}
                      handleSubmit={() => setVisible(true)}
                    />
                  )}
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAwareScrollView>
      ) : (
        <BiometricUnlockModal
          visible={visible}
          onSuccess={() => navigation.navigate("Home")}
          setVisible={setVisible}
        />
      )}
    </>
  );
};
