import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import Field from "../components/Field.js";
import EventField from "../components/EventField.js";
import { windowWidth } from "../constants/WindowSize";

const TitleField = ({ value }) => {
  return (
    <View>
      <Text style={styles.title}>{value}</Text>
    </View>
  );
};

const EventDetails = ({ event, updateEvent }) => {
  const onNoPress = () => {
    updateEvent();
  };
  const onYesPress = () => {
    updateEvent();
  };

  return (
    <View style={styles.container}>
      <TitleField value={event.title} />
      <EventField text={event.time} icon="calendar" />
      <EventField text={event.location} icon="location-pin" />
      <Field value={event.description} />
      <View style={styles.buttonView}>
        <Button
          onPress={onNoPress}
          title="no"
          type="submit"
          name="btn"
          value="No"
        />
        <Button
          onPress={onYesPress}
          title="yes"
          type="submit"
          name="btn"
          value="Yes"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 5,
    margin: 10,
    width: windowWidth * 0.8,
    marginTop: 50,
  },
  fields: {
    padding: 10,
  },
  title: {
    color: "#4E2A84",
    fontFamily: "campton",
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
