import React, { useState } from "react";
import EventDetails from "./EventDetails";
import {
  ScrollView,
} from "react-native";

const EventSelector = ({ events }) => {
  const [event, setEvent] = useState(events.E1);
  return (
      <ScrollView>
        <EventDetails event = {event}/>
      </ScrollView>
  );
};

export default EventSelector;
