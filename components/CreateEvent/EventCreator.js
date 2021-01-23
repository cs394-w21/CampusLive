import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CreateEventImage from "./CreateEventImage";

const EventCreator = ({}) => {
  return (
    <View style={styles.container}>
      <CreateEventImage />
      {/* Fields to upload with an event */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EventCreator;
