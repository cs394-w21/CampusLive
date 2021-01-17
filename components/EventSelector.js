import React, { useState } from "react";
import EventDetails from "./EventDetails";
import {
  ScrollView,
  Text
} from "react-native";


const EventSelector = ({ events }) => {
  if (!events) return (
  <Text>
    {'Loading...'}
  </Text>);
  const keys = Object.keys(events);
  const [eventIndex, setEventIndex] = useState(0);
  const key = keys[eventIndex];
  return (
      <ScrollView>
        <EventDetails event = {events[key]}
                      eventIndex = {eventIndex}
                      setEventIndex = {setEventIndex}
                       />
      </ScrollView>
  );
};

export default EventSelector;
