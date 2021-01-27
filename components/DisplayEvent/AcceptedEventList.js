import React, { useContext } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { NavigationEvents } from "@react-navigation/native";
import EventDetails from "../EventDetails";
import EventsContext from "../../utils/EventsContext";
import UserContext from "../../utils/UserContext";

const AcceptedEventList = ({ displayEvents }) => {
  const { user, setUser } = useContext(UserContext);
  if (displayEvents.length === 0) {
    return (
      <ScrollView style={styles.eventsContainer}>
        <Text>
          Go like some Events!
        </Text>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView style={styles.eventsContainer}>{displayEvents}</ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  eventsContainer: {},
});

export default AcceptedEventList;
