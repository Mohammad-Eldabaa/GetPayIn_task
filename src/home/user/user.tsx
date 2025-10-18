import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { ProfileStyles } from "../../styles/ProfileStyles";
import { DetailRow } from "../../component/ProfileDetailRow";
import { fetchUser } from "../../calls/fetchUser";
import { useQuery } from "@tanstack/react-query";
import IsLoading from "../../component/IsLoading";
import SignOutButton from "../../component/signoutButton";
import RetryButton from "../../component/retryComponent";

export default function User() {
  const {
    data: user,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ["User"],
    queryFn: fetchUser,
  });

  if (isError) return <RetryButton onPress={()=>{refetch()}} />;
  if (isLoading) return <IsLoading />;
  return (
    <ScrollView style={ProfileStyles.container}>
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
        <SignOutButton />
      </View>
    </ScrollView>
  );
}
