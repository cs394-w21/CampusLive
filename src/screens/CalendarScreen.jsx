import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import { Agenda } from "react-native-calendars";
import EventsContext from "../utils/EventsContext";
import CalendarEvent from "../components/DisplayEvent/CalendarEvent";

const CalendarScreen = ({ navigation }) => {
  const { events } = useContext(EventsContext);
  const [dispEvents, setDispEvents] = useState({});

  const formatNumber = (number) => (number < 10 ? `0${number}` : number);

  const emptyDates = {};
  const year = new Date().getFullYear();
  const currMonth = new Date().getMonth() + 1;
  for (let newMonth = currMonth; newMonth < currMonth + 3; newMonth++) {
    Array(new Date(year, newMonth, 0).getDate())
      .keys()
      .forEach((day) => {
        emptyDates[
          `${year}-${formatNumber(newMonth)}-${formatNumber(day + 1)}`
        ] = [];
      });
  }

  useEffect(() => {
    const dateItemsObj = emptyDates;

    const listener = navigation.addListener("focus", () => {
      Object.keys(events)
        .filter((key) => events[key].choice)
        .forEach((key) => {
          if (
            events[key].date in dateItemsObj &&
            !dateItemsObj[events[key].date].includes(events[key].id)
          ) {
            dateItemsObj[events[key].date].push({ name: events[key].id });
          } else {
            dateItemsObj[events[key].date] = [{ name: events[key].id }];
          }
        });
      setDispEvents(dateItemsObj);
    });

    return listener;
  }, [navigation]);

  return (
    <Agenda
      // The list of items that have to be displayed in agenda. If you want to render item as empty date
      // the value of date key has to be an empty array []. If there exists no value for date key it is
      // considered that the date in question is not yet loaded
      // items={emptyDates}
      items={dispEvents}
      // Agenda container style
      renderItem={(item) => <CalendarEvent event={item} />}
      renderEmptyDate={() => <View />}
      renderEmptyData={() => <View />}
      style={{}}
    />
  );
};

export default CalendarScreen;
