import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ProfileStyles } from "../../styles/ProfileStyles";
import { DetailRow } from "../../component/ProfileDetailRow";
import { fetchUser } from "./fetchUser";
import { useQuery } from "@tanstack/react-query";
import IsLoading from "../../component/IsLoading";

export default function User() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["User"],
    queryFn: fetchUser,
  });

  if (isLoading) return <IsLoading />;
  return (
    <View style={ProfileStyles.container}>
      <View style={ProfileStyles.card}>
        <View style={ProfileStyles.profileSection}>
          <Image
            source={
              user?.image
                ? { uri: user.image }
                : require("../../../assets/person.webp")
            }
            style={ProfileStyles.image}
          />
          <View style={ProfileStyles.nameContainer}>
            <Text style={ProfileStyles.name}>
              {user.firstName} {user.lastName}
            </Text>
            <Text style={ProfileStyles.username}> {user.username}</Text>
          </View>
        </View>

        <View style={ProfileStyles.divider} />

        <View style={ProfileStyles.detailsSection}>
          <DetailRow icon="cake" label="Age" value={`${user.age} years`} />
          <DetailRow icon="person" label="Gender" value={user.gender} />
          <DetailRow icon="email" label="Email" value={user.email} />
          <DetailRow icon="phone" label="Phone" value={user.phone} />
        </View>
      </View>
    </View>
  );
}
