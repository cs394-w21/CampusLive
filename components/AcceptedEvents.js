import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import EventsContext from "../utils/EventsContext";
import UserContext from "../utils/UserContext";


const AcceptedEvents = () => {
    const { events, setEvents } = useContext(EventsContext);
    const { user, setUser } = useContext(UserContext);
    const renderEvent = (event) => {

    }
    return (
        <View style={styles.fields}>
            <Text>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    fields: {
        padding: 10,
    },
});

export default AcceptedEvents;
