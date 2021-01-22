import React, { useContext } from "react";
import { StyleSheet, Button, View, Text, Image } from "react-native";
import Field from "../components/Field";
import EventField from "../components/EventField";
import { windowWidth, windowHeight } from "../constants/WindowSize";
import EventsContext from "../utils/EventsContext";
import EventEnd from "./EventEnd";
import { textFont, eventCard } from "../constants/Styles";

const TitleField = ({ value }) => {
  return (
    <View>
      <Text style={styles.title}>{value}</Text>
    </View>
  );
};

const EventDetails = ({ event, handleEventChoice }) => {
  if (!event) {
    return (
      <View style={styles.container}>
        <EventEnd />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TitleField value={event.title} />
      <Image
        source={{ uri: event.img }}
        style={styles.image}
        resizeMode={"contain"}
      />
      <EventField text={event.time} icon="calendar" />
      <EventField text={event.location} icon="location-pin" />
      <Field value={event.description} />
    </View>
  );
};

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
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    width: windowWidth * 0.5,
    justifyContent: "space-evenly",
    padding: 10,
  },
});

export default EventDetails;
