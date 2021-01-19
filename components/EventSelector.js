import React, { useState, useContext, useEffect } from "react";
import EventDetails from "./EventDetails";
import { ScrollView, Text } from "react-native";
import EventsContext from "../utils/EventsContext";
import UserContext from "../utils/UserContext";

const EventSelector = ({ navigation }) => {
  const { events, setEvents } = useContext(EventsContext);
  const user = useContext(UserContext);

  const [eventIndex, setEventIndex] = useState(0);
  const [dispEvents, setDispEvents] = useState(null);

  useEffect(() => {
    if (user && events) {
      for (const eventChoice in user.events_choice) {
        events[eventChoice].choice = user.events_choice[eventChoice];
      }

      setDispEvents(
        Object.keys(events)
          .filter((event) => !events[event].hasOwnProperty("choice"))
          .reduce(function (acc, event) {
            acc[event] = events[event];
            return acc;
          }, {})
      );
    }
  }, [events, user]);

  if (!events || !dispEvents) {
    return <Text>{"Loading..."}</Text>;
  }

  const eventKeys = Object.keys(dispEvents);
  const event = eventKeys[eventIndex];

  const handleEventChoice = () => {
    if (eventIndex + 1 === eventKeys.length) {
      navigation.navigate("EventEndScreen");
      setEventIndex(0);
    } else {
      setEventIndex(eventIndex + 1);
    }
  };

  return (
    <ScrollView>
      <EventDetails
        event={dispEvents[event]}
        handleEventChoice={handleEventChoice}
      />
    </ScrollView>
  );
};

export default EventSelector;
