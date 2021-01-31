/* eslint-disable react/style-prop-object */
import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
// import { Calendar, CalendarList, Agenda } from "react-native-calendars";
// import Calendar from "react-calendar";
import CalendarStrip from "react-native-calendar-strip";
import DayPicker from "react-day-picker";
import EventsContext from "../utils/EventsContext";
import CalendarEvent from "../components/DisplayEvent/CalendarEvent";
import Banner from "../components/Banner";

const formatNumber = (number) => (number < 10 ? `0${number}` : number);

const CalendarScreen = ({ navigation }) => {
  const { events } = useContext(EventsContext);
  const [dispEvents, setDispEvents] = useState({});
  const [startDate, setStartDate] = useState(new Date().getTime());
  const [endDate, setEndDate] = useState(new Date().getTime());

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
      <View>
        <Banner />
        {/* <CalendarStrip style={styles.calendar} /> */}
        <Calendar
          startDate={null}
          endDate={endDate}
          disableDates={(date) => false}
          onChange={(newStart, newEnd) => {
            console.log(
              `start: ${new Date(newStart).getDate()}; end: ${new Date(
                newEnd
              ).getDate()}`
            );
            setEndDate(newEnd);
          }}
        />

        <Text>Hello world</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
  },
  calendar: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
  },
});

export default CalendarScreen;
/* <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        // items={emptyeventDates}
        items={eventDates}
        // Agenda container style
        renderItem={(item) => <CalendarEvent event={item} />}
        renderEmptyDate={() => <View />}
        renderEmptyData={() => <View />}
        style={{}}
      /> */
