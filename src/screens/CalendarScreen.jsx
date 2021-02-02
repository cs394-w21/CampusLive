/* eslint-disable react/style-prop-object */
import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Banner from "../components/Banner";
import EventsContext from "../utils/EventsContext";
import EventCalendar from "../components/DisplayEvent/EventCalendar";

const CalendarScreen = ({ navigation }) => {
  const { events } = useContext(EventsContext);
  const [selectedDay, setSelectedDay] = useState({});
  const [markedEvents, setMarkedEvents] = useState({});

  useEffect(() => {
    const tempMarkedEvents = {};
    const listener = navigation.addListener("focus", () => {
      Object.entries(events)
        .filter(([, event]) => event.choice)
        .forEach(([id, event]) => {
          // eslint-disable-next-line no-prototype-builtins
          if (!tempMarkedEvents.hasOwnProperty(event.startDateString)) {
            tempMarkedEvents[event.startDateString] = {};
          }
          tempMarkedEvents[event.startDateString][id] = event;
        });
      setMarkedEvents(tempMarkedEvents);
    });

    return listener;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Banner />
      <EventCalendar
        markedEvents={markedEvents}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <StatusBar style="auto" />
    </View>
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

export default CalendarScreen;
