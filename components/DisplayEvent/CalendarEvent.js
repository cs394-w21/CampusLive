import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { textFont, eventCard } from '../../constants/Styles';
import { windowHeight } from '../../constants/WindowSize';
import Field from "../../components/Field";
import EventField from "../../components/EventField";
import EventsContext from "../../utils/EventsContext";

const TitleField = ({ value }) => {
    return (
        <View>
            <Text style={styles.title}>{value}</Text>
        </View>
    );
};

const CalendarEvent = ({ event }) => {
    // console.log("event to display", event);
    return (
        <View style={styles.container}>
            <TitleField value={event.title} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...eventCard,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        width: eventCard.width * .9,
        marginLeft: eventCard.marginLeft * 0.3,
        marginRight: eventCard.marginRight * 0.3,
        height: windowHeight * .2,
    }
});

export default CalendarEvent;