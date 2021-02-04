import React from "react";
import { StyleSheet, View } from "react-native";
import { windowWidth } from "../../constants/WindowSize";
import EventField from "../EventField";

const EventCalendarItem = ({ event, expanded }) => (
  <View style={styles.container}>
    <EventField text={event.title} icon="clock" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    borderRadius: 5,
    marginHorizontal: windowWidth * 0.1,
    width: windowWidth * 0.8,
    marginVertical: Math.min(25, windowWidth * 0.1),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    padding: 15,
    height: 75,
  },
});

export default EventCalendarItem;
