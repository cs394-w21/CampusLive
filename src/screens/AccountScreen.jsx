/* eslint-disable react/style-prop-object */
import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Banner from "../components/Banner";

// eslint-disable-next-line no-unused-vars
const AccountScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Banner />
    <Text>Login or Reigster</Text>
    <StatusBar style="auto" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AccountScreen;
