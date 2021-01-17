import React, { useState } from "react";
import EventDetails from "./EventDetails";
import {
  ScrollView,
  Text
} from "react-native";
import EventEnd from "../screens/EventEnd.js"



const EventSelector = ({ events }) => {
  if (!events) return (
  <Text>
    {'Loading...'}
  </Text>);
  const keys = Object.keys(events);
  const [eventIndex, setEventIndex] = useState(0);
  const key = keys[eventIndex];
  const showEvents = () => {
    if (eventIndex === keys.length) {
      console.log("1")
      return <EventEnd/>
    } else {
      console.log("2")
      return <EventDetails event = {events[key]}
                      eventIndex = {eventIndex}
                      setEventIndex = {setEventIndex}
                       />
    }
  }
   
  return (
      <ScrollView>
        {showEvents}
      </ScrollView>
  );
};

export default EventSelector;
