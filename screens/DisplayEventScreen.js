import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import EventsContext from "../utils/EventsContext";
import Banner from "../components/Banner";
import EventDetails from "../components/EventDetails";

const DisplayEventScreen = ({ navigation }) => {
  const { events, setEvents } = useContext(EventsContext);
  const [dispEvents, setDispEvents] = useState([]);

  useEffect(() => {
    const listener = navigation.addListener("focus", () => {
      const tempEvents = Object.keys(events)
        .filter((key) => events[key].choice)
        .map(function (event) {
          return <EventDetails key={events[event].id} event={events[event]} />;
        });
      setDispEvents(tempEvents);
    });

    return listener;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Banner navigation={navigation} />
      <ScrollView>{dispEvent}</ScrollView>
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

export default DisplayEventScreen;
