import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Field from "./Field";
import EventField from "./EventField";
import { textFont, eventCard } from "../constants/Styles";
import { windowWidth } from "../constants/WindowSize";

const TitleField = ({ value }) => (
  <View>
    <Text style={styles.title}>{value}</Text>
  </View>
);

const getDateRange = (startDateString, endDateString) =>
  endDateString ? `${startDateString} - ${endDateString}` : startDateString;

const EventDetails = ({ event }) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TitleField value={event.title} />
      <Image
        source={{ uri: event.img }}
        style={styles.image}
        resizeMode="contain"
      />
      
      
      <EventField text={event.location} icon="location-pin" />
      <EventField
        text={getDateRange(event.startDateString, event.endDateString)}
        icon="calendar"
      />
      <Field value={event.description} />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: { ...eventCard },
  image: {
    width: Math.min(windowWidth * 0.5, 200),
    height: Math.min(windowWidth * 0.5, 200),
  },
  fields: {
    padding: 10,
  },
  title: {
    color: "#4E2A84",
    fontFamily: textFont,
    fontSize: 40,
    textAlign: "center"
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    width: windowWidth * 0.5,
    justifyContent: "space-evenly",
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default EventDetails;
