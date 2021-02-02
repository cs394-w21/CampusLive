import React from "react";
import { Calendar } from "react-native-calendars";
import { Entypo } from "@expo/vector-icons";

const dot = { key: "dot", color: "blue", selectedDotColor: "yellow" };

// TODO: change color?
const CalendarArrow = ({ direction }) =>
  direction === "left" ? (
    <Entypo name="chevron-left" size={20} color="black" />
  ) : (
    <Entypo name="chevron-right" size={20} color="black" />
  );

const EventCalendar = ({ markedEvents, selectedDay, setSelectedDay }) => {
  console.log(Object.entries(markedEvents));
  const markedDates = Object.entries(markedEvents).map(([date, events]) => {
    const markedDatesInput = {
      [date]: {
        dots: Object.keys(events).map(() => dot),
        selected: date === selectedDay,
        selectedColor: "blue",
      },
    };
    // eslint-disable-next-line no-prototype-builtins
    if (!markedEvents.hasOwnProperty(selectedDay)) {
      markedDatesInput[selectedDay] = { selected: true, selectedColor: "blue" };
    }
    return markedDatesInput;
  });
  const newObj = Object.assign({}, ...markedDates);

  const onDayPress = (day) => {
    setSelectedDay(day.dateString);
  };

  return (
    <Calendar
      renderArrow={(direction) => <CalendarArrow direction={direction} />}
      onDayPress={onDayPress}
      markedDates={newObj}
      markingType="multi-dot"
    />
  );
};

export default EventCalendar;
