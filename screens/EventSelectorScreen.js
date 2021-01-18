import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import EventSelector from "../components/EventSelector";
import { firebase } from "../utils/firebase";
import Banner from "../components/Banner";

// TODO: Move event pull to app.js because we might also need to populate a calendar. Selector screen will be passed what events to be shown.
const EventSelectorScreen = ({ navigation }) => {
  const [events, setEvents] = useState();

  useEffect(() => {
    const db = firebase.database().ref();
    const handleData = (snap) => {
      if (snap.val()) setEvents(snap.val().events);
    };
    db.on("value", handleData, (error) => alert(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      <EventSelector events={events} navigation={navigation} />
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
