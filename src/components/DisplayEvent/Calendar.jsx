import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import DayPicker from "react-day-picker";
import CalendarEvent from "./CalendarEvent";
import "./react-day-picker-style.css";

const Calendar = ({ selectedDay, setSelectedDay }) => {
  const handleDayClick = (day, { selected }) =>
    selected ? setSelectedDay(undefined) : setSelectedDay(day);

  return (
    <View style={styles.calendar}>
      <DayPicker onDayClick={handleDayClick} selectedDays={selectedDay} />
      <Text style={styles.text}>
        {selectedDay ? selectedDay.getDate() : "Select a day."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "white",
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
  },
  text: {
    textAlign: "center",
  },
});

export default Calendar;
