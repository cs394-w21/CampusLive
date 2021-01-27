import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { StatusBar } from "expo-status-bar";
import Banner from "../components/Banner";
import EventDetails from "../components/EventDetails";
import EventsContext from "../utils/EventsContext";
import CalendarEvent from "../components/DisplayEvent/CalendarEvent";

const formatNumber = (number) => number < 10 ? "0" + number : number;

const eventDates = {};
const year = new Date().getFullYear();
const currMonth = new Date().getMonth() + 1;
// console.log('first run');
for (let newMonth = currMonth; newMonth < currMonth + 3; newMonth++) {
    for (const day of Array(new Date(year, newMonth, 0).getDate()).keys()) {
        eventDates[[year, formatNumber(newMonth), formatNumber(day + 1)].join("-")] = [];
    }
}



const CalendarScreen = ({ navigation }) => {
    const { events, setEvents } = useContext(EventsContext);
    const [dispEvents, setDispEvents] = useState({});

    const year = new Date().getFullYear();
    const currMonth = new Date().getMonth() + 1;
    console.log('first run');
    for (let newMonth = currMonth; newMonth < currMonth + 3; newMonth++) {
        for (const day of Array(new Date(year, newMonth, 0).getDate()).keys()) {
            eventDates[[year, formatNumber(newMonth), formatNumber(day + 1)].join("-")] = [];
        }
    }
    useEffect(() => {
        const dateItemsObj = eventDates;


        const listener = navigation.addListener("focus", () => {
            Object.keys(events)
                .filter((key) => events[key].choice)
                .forEach((key) => {
                    if (events[key].date in dateItemsObj && !dateItemsObj[events[key].date].includes(events[key].id)) {
                        dateItemsObj[events[key].date].push({ name: events[key].id });
                    } else {
                        dateItemsObj[events[key].date] = [{ name: events[key].id }];
                    }
                });
            setDispEvents(dateItemsObj);
            console.log(dateItemsObj);
        });

        return listener;
    }, [navigation]);
    // console.log(dispEvents);

    return (
        <Agenda
            // The list of items that have to be displayed in agenda. If you want to render item as empty date
            // the value of date key has to be an empty array []. If there exists no value for date key it is
            // considered that the date in question is not yet loaded
            // items={emptyeventDates}
            items={eventDates}
            // Agenda container style
            renderItem={(item, firstItemInDay) => { return (<CalendarEvent event={item} />); }}
            renderEmptyDate={() => { return <View /> }}
            renderEmptyData={() => { return <View /> }}
            style={{}}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E4E0EE",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default CalendarScreen;