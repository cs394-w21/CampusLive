import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import EventSelector from "../components/EventSelector";

const EventSelectorScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <EventSelector navigation={navigation} />
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

export default EventSelectorScreen;
