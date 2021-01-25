import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CreateEventImage from "./CreateEventImage";
import CreateEventForm from "./CreateEventForm";
import Form from "../Form";

const EventCreator = ({}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <CreateEventForm />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EventCreator;
