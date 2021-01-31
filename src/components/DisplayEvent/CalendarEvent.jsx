import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { eventCard } from "../../constants/Styles";
import { windowHeight } from "../../constants/WindowSize";

const TitleField = ({ value }) => (
  <View>
    <Text style={styles.title}>{value}</Text>
  </View>
);

const CalendarEvent = ({ event }) => (
  // console.log("event to display", event);
  <View style={styles.container}>
    <TitleField value={event.title} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...eventCard,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: eventCard.width * 0.9,
    marginLeft: eventCard.marginLeft * 0.3,
    marginRight: eventCard.marginRight * 0.3,
    height: windowHeight * 0.2,
  },
});

export default CalendarEvent;
