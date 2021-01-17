import React, { useState } from "react";
import EventDetails from "./EventDetails";
import { ScrollView, Text } from "react-native";

const EventSelector = ({ navigation, events }) => {
  if (!events) {
    return <Text>{"Loading..."}</Text>;
  }
  const eventKeys = Object.keys(events);
  const [eventIndex, setEventIndex] = useState(0);
  const event = eventKeys[eventIndex];

  const updateEvent = () => {
    if (eventIndex + 1 === eventKeys.length) {
      navigation.navigate("EventEndScreen");
      setEventIndex(0);
    } else {
      setEventIndex(eventIndex + 1);
    }
  };

  return (
    <ScrollView>
      <EventDetails event={events[event]} updateEvent={updateEvent} />
    </ScrollView>
  );
};

export default EventSelector;
