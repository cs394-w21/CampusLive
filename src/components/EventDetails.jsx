import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Field from "./Field";
import EventField from "./EventField";
import { textFont, eventCard } from "../constants/Styles";
import { windowWidth } from "../constants/WindowSize";
import { Entypo } from "@expo/vector-icons";
const dayDict = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};
const getDateHelper = (dateTime) => {
  const day = dayDict[dateTime.getDay()];
  const month = monthDict[dateTime.getMonth()];
  const date = dateTime.getDate();
  let ampm = 'AM';
  let hour = dateTime.getHours();
  if (hour>12){
    hour = hour - 12;
    ampm = 'PM';
  }
  if (hour == 0){
    hour = 12;
  }

  return `${day}, ${month} ${date}, ${hour} ${ampm}`;
}
const monthDict = ["Jan","Feb","Mar","Apr","May","June", "July", "Aug","Sep","Oct","Nov","Dec"];
const TitleField = ({ value }) => (
  <View>
    <Text style={styles.title}>{value}</Text>
  </View>
);
const TimeField = ({ text, icon }) => (
  <View style={styles.fieldContainer}>
    <Entypo name={icon} size={15} color="black" style={styles.icon} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const getDateRange = (startDateTime, endDateTime) => {
  return `${getDateHelper(startDateTime)} - ${getDateHelper(endDateTime)}`

};
  

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
      <TimeField
        text={getDateRange(event.startDateTime, event.endDateTime)}
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
  },
  text: {
    fontFamily: textFont,
    fontSize: 15
  },
  fieldContainer: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    alignContent: "center"
  },
  icon: {
    marginRight: 10,
  }
});

export default EventDetails;
