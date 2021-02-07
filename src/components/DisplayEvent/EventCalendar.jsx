import React from "react";
import { Calendar } from "react-native-calendars";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../../constants/WindowSize";
import { textFont, eventCard } from "../../constants/Styles";

const dot = { color: "#4e2a84", selectedDotColor: "white" };

// TODO: change color?
const CalendarArrow = ({ direction }) =>
  direction === "left" ? (
    <Entypo name="chevron-left" size={20} color="black" />
  ) : (
    <Entypo name="chevron-right" size={20} color="black" />
  );

const EventCalendar = ({ markedEvents, selectedDay, setSelectedDay }) => {
  // console.log(Object.entries(markedEvents));
  const markedDatesArr = Object.entries(markedEvents).map(([date, events]) => {
    const markedDatesInput = {
      [date]: {
        dots: Object.keys(events).map((eventId) => ({
          ...dot,
          key: `${date}_${eventId}`,
        })),
        selected: date === selectedDay,
        selectedColor: "#7AC0E6",
      },
    };
    if (!markedEvents.hasOwnProperty(selectedDay)) {
      markedDatesInput[selectedDay] = {
        selected: true,
        selectedColor: "#7AC0E6",
      };
    }
    return markedDatesInput;
  });
  const markedDates = Object.assign({}, ...markedDatesArr);
  // console.log(markedDates);
  const onDayPress = (day) => {
    setSelectedDay(day.dateString);
  };

  return (
    <Calendar
      renderArrow={(direction) => <CalendarArrow direction={direction} />}
      onDayPress={onDayPress}
      markedDates={markedDates}
      markingType="multi-dot"
      style={styles.calendarStyle}
    />
  );
};

const styles = StyleSheet.create({
  calendarStyle: {
    //...eventCard,
    width: windowWidth * 0.8,
    fontFamily: textFont,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: windowWidth * 0.1,
    marginTop: Math.min(25, windowWidth * 0.1),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    padding: 15,
  },
});

export default EventCalendar;
