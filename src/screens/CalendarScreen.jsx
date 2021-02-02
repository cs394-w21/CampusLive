/* eslint-disable react/style-prop-object */
import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Calendar from "../components/DisplayEvent/Calendar";
import EventsContext from "../utils/EventsContext";
import Banner from "../components/Banner";

const formatNumber = (number) => (number < 10 ? `0${number}` : number);

const CalendarScreen = ({ navigation }) => {
  const { events } = useContext(EventsContext);
  const [dispEvents, setDispEvents] = useState({});
  const [selectedDay, setSelectedDay] = useState(undefined);

  const eventDates = {};
  const year = new Date().getFullYear();
  const currMonth = new Date().getMonth() + 1;
  for (let newMonth = currMonth; newMonth < currMonth + 3; newMonth++) {
    const dateIter = Array(new Date(year, newMonth, 0).getDate()).keys();
    let day = dateIter.next();
    while (!day.done) {
      eventDates[
        `${year}-${formatNumber(newMonth)}-${formatNumber(day.value + 1)}`
      ] = [];
      day = dateIter.next();
    }
  }

  useEffect(() => {
    const dateItemsObj = eventDates;
    // console.log(events);
    const listener = navigation.addListener("focus", () => {
      Object.keys(events)
        .filter((key) => events[key].choice)
        .forEach((key) => {
          if (
            events[key].date in dateItemsObj &&
            !dateItemsObj[events[key].date].includes(events[key].id)
          ) {
            dateItemsObj[events[key].date].push({ name: events[key].id });
          } else {
            dateItemsObj[events[key].date] = [{ name: events[key].id }];
          }
        });
      setDispEvents(dateItemsObj);
      // console.log(dateItemsObj);
    });

    return listener;
  }, [navigation]);
  // console.log(dispEvents);

  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
  },
});

export default CalendarScreen;
