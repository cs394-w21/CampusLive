import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import EventsContext from "../utils/EventsContext";
import UserContext from "../utils/UserContext";
import EventDetails from "./EventDetails";
import EventEnd from "./EventEnd";
import ChoiceDisplay from "./ChoiceDisplay";

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
      <EventDetails
        event={dispEvents[event]}
        handleEventChoice={handleEventChoice}
      />
    );
  }
};

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
    console.log("event, choice: ", event, choice);
    events[event].choice = choice;
    setEvents(events);
    setEventIndex(eventIndex + 1);
  };

  const viewAgainPress = () => {
    setDispNoToggle(true);
  };

  return (
    <ScrollView>
      <EventDisplay
        dispEvents={dispEvents}
        event={event}
        handleEventChoice={handleEventChoice}
        viewAgainPress={viewAgainPress}
      />
      <ChoiceDisplay events={events} />
    </ScrollView>
  );
};

export default EventSelector;
