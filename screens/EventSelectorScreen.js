import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import EventSelector from "../components/EventSelector";
import Banner from "../components/Banner";
import { ScrollView } from "react-native-gesture-handler";

const EventSelectorScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Banner />
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
