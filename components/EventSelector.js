import React, { useState } from "react";
import EventDetails from "./EventDetails";
import {
  ScrollView,
  Text
} from "react-native";

const EventSelector = ({ navigation, events }) => {
  if (!events) return (
  <Text>
    {'Loading...'}
  </Text>);
  const keys = Object.keys(events);
  const [eventIndex, setEventIndex] = useState(0);
  const key = keys[eventIndex];

  const updateEvent = () => {
    if (eventIndex + 1 === keys.length) {
      navigation.navigate("EventEndScreen");
    } else { 
        setEventIndex(eventIndex + 1);
    }
  }
   
  return (
      <ScrollView>
        <EventDetails event = {events[key]}
                      eventIndex = {eventIndex}
                      updateEvent = {updateEvent}
                       />
      </ScrollView>
  );
};

export default EventSelector;
