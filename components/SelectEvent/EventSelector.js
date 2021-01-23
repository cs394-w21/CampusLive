import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import EventsContext from "../../utils/EventsContext";
import UserContext from "../../utils/UserContext";
import EventDetails from "../EventDetails";
import EventEnd from "./EventEnd";
import EventChoiceButtons from "./EventChoiceButtons";

// BUG: After we've toggled choice, if we choose "no" when viewing again we wont' progress through events.
const getDispEvents = (events, choice) => {
  return (
    events &&
    Object.keys(events)
      .filter(
        (event) =>
          !events[event].hasOwnProperty("choice") ||
          (choice && !events[event].choice)
      )
      .reduce(function (acc, event) {
        acc[event] = events[event];
        return acc;
      }, {})
  );
};

const EventDisplay = ({
  dispEvents,
  event,
  handleEventChoice,
  viewAgainPress,
}) => {
  if (!event) {
    return <EventEnd viewAgainPress={viewAgainPress} />;
  } else {
    return (
      <View style={styles.displayContainer}>
        <EventDetails
          event={dispEvents[event]}
          handleEventChoice={handleEventChoice}
        />
        <EventChoiceButtons handleEventChoice={handleEventChoice} />
      </View>
    );
  }
};

// TODO: Swipe again doesn't work
const EventSelector = ({ navigation }) => {
  const { events, setEvents } = useContext(EventsContext);
  const [eventIndex, setEventIndex] = useState(0);
  const [dispNoToggle, setDispNoToggle] = useState(false);

  if (!events) {
    return <Text>{"Loading..."}</Text>;
  }

  const dispEvents = getDispEvents(events, dispNoToggle);
  const event = Object.keys(dispEvents)[0];

  const handleEventChoice = (choice) => {
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
