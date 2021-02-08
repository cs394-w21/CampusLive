import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import EventsContext from "../../utils/EventsContext";
import EventDetails from "../EventDetails";
import EventEnd from "./EventEnd";
import EventChoiceButtons from "./EventChoiceButtons";

// BUG: After we've toggled choice, if we choose "no" when viewing again we wont' progress through events.
const getDispEvents = (events, choice, selectionIndex) =>
  events &&
  Object.keys(events)
    .filter(
      (event) =>
        // eslint-disable-next-line no-prototype-builtins
        (!events[event].hasOwnProperty("choiceIndex")
          || events[event].choiceIndex < selectionIndex)
        && (choice === null ||
          events[event].choice === choice)
      // (choice === null && !events[event].hasOwnProperty("choice"))
      // || (!events[event].choice === choice)
      // !event || events[event].choiceRound < choiceRound
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
const EventSelector = ({ displayTypeToggle, setDisplayTypeToggle }) => {
  const { events, setEvents } = useContext(EventsContext);
  const [eventSelectionIndex, setEventSelectionIndex] = useState({ "individual": 0, "round": 0 });

  if (!events) {
    return <Text>Loading...</Text>;
  }

  const dispEvents = getDispEvents(events, displayTypeToggle, eventSelectionIndex.round);
  const event = Object.keys(dispEvents)[0];

  const handleEventChoice = (choice) => {
    events[event].choice = choice;
    events[event].choiceIndex = eventSelectionIndex.round;
    setEvents(events);
    setEventSelectionIndex({
      "individual": eventSelectionIndex.individual + 1,
      "round": eventSelectionIndex.round
    });
  };

  const viewAgainPress = (type) => {
    setEventSelectionIndex({
      "individual": eventSelectionIndex.individual,
      "round": eventSelectionIndex.round + 1
    });
    setDisplayTypeToggle(type);
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
