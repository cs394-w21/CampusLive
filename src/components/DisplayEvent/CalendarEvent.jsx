import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { eventCard } from "../../constants/Styles";
import { windowHeight } from "../../constants/WindowSize";
import Field from "../Field";
import EventField from "../EventField";
import EventsContext from "../../utils/EventsContext";

const TitleField = ({ value }) => (
  <View>
    <Text style={styles.title}>{value}</Text>
  </View>
);

const CalendarEvent = ({ event }) => (
  <View style={styles.container}>
    {/* <TitleField value={event.title} />
        <Image
            source={{ uri: event.img }}
            style={styles.image}
            resizeMode={"contain"}
        />
        <EventField text={event.time} icon="calendar" />
        <EventField text={event.location} icon="location-pin" />
        <Field value={event.description} /> */}
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
