/* eslint-disable react/style-prop-object */
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import EventSelector from "../components/SelectEvent/EventSelector";
import Banner from "../components/Banner";

const SelectEventScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Banner />
    <EventSelector navigation={navigation} />
    <StatusBar style="auto" />
  </View>
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
