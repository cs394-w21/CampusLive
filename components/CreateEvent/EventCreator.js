import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CreateEventForm from "./CreateEventForm";

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
    padding: 10,
  },
});

export default EventCreator;
