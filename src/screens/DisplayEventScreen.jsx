/* eslint-disable react/style-prop-object */
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import EventsContext from "../utils/EventsContext";
import Banner from "../components/Banner";
import EventDetails from "../components/EventDetails";
import AcceptedEventList from "../components/DisplayEvent/AcceptedEventList";

const DisplayEventScreen = ({ navigation }) => {
  const { events } = useContext(EventsContext);
  const [dispEvents, setDispEvents] = useState([]);

  useEffect(() => {
    const listener = navigation.addListener("focus", () => {
      const tempEvents = Object.keys(events)
        .filter((key) => events[key].choice)
        .map((event) => <EventDetails key={event} event={events[event]} />);
      setDispEvents(tempEvents);
    });

    return listener;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      <AcceptedEventList displayEvents={dispEvents} />
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
