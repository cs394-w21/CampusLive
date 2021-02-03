/* eslint-disable react/style-prop-object */
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import EventSelector from "../components/SelectEvent/EventSelector";
import Banner from "../components/Banner";

const SelectEventScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Banner />
    <EventSelector navigation={navigation} />
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

export default SelectEventScreen;
