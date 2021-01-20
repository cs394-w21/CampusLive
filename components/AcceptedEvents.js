import React, { useContext } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import EventDetails from "../components/EventDetails";
import EventsContext from "../utils/EventsContext";
import UserContext from "../utils/UserContext";


const AcceptedEvents = () => {
    const { events, setEvents } = useContext(EventsContext);
    const { user, setUser } = useContext(UserContext);
    const eventList = Object.keys(events).filter(key => console.log(events[key]));
    console.log(eventList);
    const renderEvents = Object.keys(events).filter(key => events[key].choice).map(key => {
        console.log(events[key].title)
        return (
            <EventDetails key={events[key].id} event={events[key]} />
        )
    })
    return (
        <ScrollView style={styles.eventsContainer}>
            {renderEvents}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    eventsContainer: {

    },
});

export default AcceptedEvents;
