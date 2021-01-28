import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

const AcceptedEventList = ({ displayEvents }) => {
  if (displayEvents.length === 0) {
    return (
      <ScrollView style={styles.eventsContainer}>
        <Text>
          Go like some Events!
        </Text>
      </ScrollView>
    )
  } 
  return (
    <ScrollView style={styles.eventsContainer}>{displayEvents}</ScrollView>
  );
  ;
};

const styles = StyleSheet.create({
  eventsContainer: {},
});

export default AcceptedEventList;
