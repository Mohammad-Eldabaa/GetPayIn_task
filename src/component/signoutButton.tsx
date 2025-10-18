import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ProfileStyles } from "../styles/ProfileStyles";
import { useDispatch } from "react-redux";
import { clearToken } from "../redux/authSlice/authSlice";
import { clearProductsAndCategroy } from "../redux/productsSlice/productSlice";
import { useNavigation } from "@react-navigation/core";
import { NavProp } from "../home/categories/categories";

export default function SignOutButton() {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavProp>();

  return (
    <TouchableOpacity
      style={ProfileStyles.button}
      onPress={() => {
        dispatch(clearToken());
        dispatch(clearProductsAndCategroy());

        navigation.navigate("Login");
      }}
      activeOpacity={0.7}
    >
      <Text style={ProfileStyles.buttonText}>Sign Out</Text>
    </TouchableOpacity>
  );
}
