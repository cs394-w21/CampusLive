import React from "react";
import { StyleSheet, View, Text } from "react-native";

const EventCalendar = ({ selectedDay, markedEvents }) => (
  <View>
    <Text>
      {selectedDay &&
        markedEvents[selectedDay] &&
        Object.values(markedEvents[selectedDay]).map(
          (event) => `${event.title}\n`
        )}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EventCalendar;
