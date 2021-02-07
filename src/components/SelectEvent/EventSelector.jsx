import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import EventsContext from "../../utils/EventsContext";
import EventDetails from "../EventDetails";
import EventEnd from "./EventEnd";
import EventChoiceButtons from "./EventChoiceButtons";
import firebase from "../../utils/firebase";
import UserContext from "../../utils/UserContext";

// BUG: After we've toggled choice, if we choose "no" when viewing again we wont' progress through events.
const getDispEvents = (events, choice) =>
  events &&
  Object.keys(events)
    .filter(
      (event) =>
        !events[event].hasOwnProperty("choice") ||
        (choice && !events[event].choice)
    )
    .reduce((acc, event) => {
      acc[event] = events[event];
      return acc;
    }, {});

const EventDisplay = ({
  dispEvents,
  event,
  handleEventChoice,
  viewAgainPress,
}) => {
  // console.log(event);
  if (!event) {
    return <EventEnd viewAgainPress={viewAgainPress} />;
  }
  return (
    <View style={styles.displayContainer}>
      <EventDetails
        event={dispEvents[event]}
        handleEventChoice={handleEventChoice}
      />
      <EventChoiceButtons handleEventChoice={handleEventChoice} />
    </View>
  );
};

// TODO: Swipe again doesn't work
const EventSelector = () => {
  const { events, setEvents } = useContext(EventsContext);
  const { user, setUser } = useContext(UserContext);
  const [eventIndex, setEventIndex] = useState(0);
  const [dispNoToggle, setDispNoToggle] = useState(false);

  if (!events) {
    return <Text>Loading...</Text>;
  }

  const dispEvents = getDispEvents(events, dispNoToggle);
  const event = Object.keys(dispEvents)[0];

  const handleEventChoice = (choice) => {
    user.eventChoices[event] = choice;
    setUser(user);
    firebase
      .database()
      .ref("users")
      .child(user.uid)
      .child("eventChoices")
      .set(user.eventChoices)
      .catch((error) => console.log(error));
    events[event].choice = choice;
    setEvents(events);
    setEventIndex(eventIndex + 1);
  };

  const viewAgainPress = () => {
    setDispNoToggle(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <EventDisplay
          dispEvents={dispEvents}
          event={event}
          handleEventChoice={handleEventChoice}
          viewAgainPress={viewAgainPress}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default EventSelector;
