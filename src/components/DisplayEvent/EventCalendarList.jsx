import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { textFont, eventCard } from "../../constants/Styles";
import EventCalendarItem from "./EventCalendarItem"

const EventCalendarList = ({ selectedDay, markedEvents }) => (


  <ScrollView style={styles.container} >
    {selectedDay &&
      markedEvents[selectedDay] &&
      Object.values(markedEvents[selectedDay]).map(
        (event) => <EventCalendarItem event={event} key={event.title} />
      )}

  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});

export default EventCalendarList;
