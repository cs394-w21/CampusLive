import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChoiceDisplay = ({ events }) => {
  return (
    <View style={styles.choiceContainer}>
      <View style={styles.choiceItem}>
        <Text style={styles.choiceHeader}>ACCEPTED</Text>
        {Object.keys(events)
          .filter(
            (event) =>
              events[event].hasOwnProperty("choice") && events[event].choice
          )
          .map(function (event) {
            return (
              <Text key={event} style={styles.choiceEvent}>
                {event}
              </Text>
            );
          })}
      </View>
      <View style={styles.choiceItem}>
        <Text style={styles.choiceHeader}>REJECTED</Text>
        {Object.keys(events)
          .filter(
            (event) =>
              events[event].hasOwnProperty("choice") && !events[event].choice
          )
          .map(function (event) {
            return (
              <Text key={event} style={styles.choiceEvent}>
                {event}
              </Text>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  choiceContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  choiceItem: {
    width: "50%", // is 50% of container width
    textAlign: "center",
  },
  choiceHeader: {
    fontSize: 32,
  },
  choiceEvent: {
    fontSize: 24,
  },
});

export default ChoiceDisplay;
