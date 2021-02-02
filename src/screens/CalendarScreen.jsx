/* eslint-disable react/style-prop-object */
import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Banner from "../components/Banner";
import EventsContext from "../utils/EventsContext";
import EventCalendar from "../components/DisplayEvent/EventCalendar";
import EventCalendarList from "../components/DisplayEvent/EventCalendarList";
import { windowHeight } from "../constants/WindowSize";

const CalendarScreen = ({ navigation }) => {
  const { events } = useContext(EventsContext);
  const [selectedDay, setSelectedDay] = useState(undefined);
  const [markedEvents, setMarkedEvents] = useState({});

  useEffect(() => {
    const listener = navigation.addListener("focus", () => {
      const tempMarkedEvents = {};
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
      console.log(tempMarkedEvents);
    });

    return listener;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      <EventCalendar
        markedEvents={markedEvents}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <EventCalendarList
        selectedDay={selectedDay}
        markedEvents={markedEvents}
      />
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
  }

});

export default CalendarScreen;
