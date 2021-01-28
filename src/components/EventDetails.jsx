import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Field from "./Field";
import EventField from "./EventField";
import { textFont, eventCard } from "../constants/Styles";
import { windowWidth } from "../constants/WindowSize";

const TitleField = ({ value }) => (
  <View>
    <Text style={styles.title}>{value}</Text>
  </View>
);

// const TimeField = ({ startTime, endTime }) => (
//   <View>
//     <Text style={{}}>
//       {startTime + (endTime !== "" ? ` - ${endTime}` : "")}
//     </Text>
//   </View>
// );

const EventDetails = ({ event }) => (
  <View style={styles.container}>
    <TitleField value={event.title} />
    <Image
      source={{ uri: event.img }}
      style={styles.image}
      resizeMode="contain"
    />
    {/* <TimeField startTime={event.startTime} endTime={event.endTime} /> */}
    <EventField text={event.time} icon="calendar" />
    <EventField text={event.location} icon="location-pin" />
    <Field value={event.description} />
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
