import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Formik } from "formik";
import { LoginInitialValues, loginSchema } from "./loginSchema";
import SubmitButton from "../../component/submitButton";
import { submitLogin } from "./submitLogin";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { styles } from "../../styles/LoginStyles";
import BiometricUnlockModal from "../bio_integration/BiometricUnlockModal";
import AuthInputs from "../../component/authInputs";
import { isTokenExpire } from "../../calls/APIClien";

export const LoginPage = ({ navigation }: any) => {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const token = useSelector((store: RootState) => store.auth.token);

  // useEffect(() => {
  //   if (!isTokenExpire(token)) {
  //     navigation.navigate("Home");
  //   }
  // }, []);

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
                  <AuthInputs
                    LoginInitialValues={LoginInitialValues}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    values={values}
                    errors={errors}
                    touched={touched}
                    navigation={navigation}
                  />
                  <SubmitButton
                    isSubmitting={isSubmitting}
                    handleSubmit={handleSubmit}
                    val={"login"}
                  />
                  {!!token && !isTokenExpire(token) && (
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
