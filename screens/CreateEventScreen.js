import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import EventCreator from "../components/CreateEvent/EventCreator";
import Banner from "../components/Banner";

const CreateEventScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Banner navigation={navigation} />
      <EventCreator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateEventScreen;
