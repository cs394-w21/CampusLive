import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { windowWidth, windowHeight } from "../constants/WindowSize";

const EventSelectionButtons = ({ eventButtonPress }) => (
    <View style={styles.buttonView}>
        <TouchableOpacity
            onPress={eventButtonPress}
            title="no"
            type="submit"
            name="btn"
            value="No"
            style={styles.declineButton}
        >
            <Text style={styles.buttonText}>Not Interested</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={eventButtonPress}
            title="yes"
            type="submit"
            name="btn"
            value="Yes"
            style={styles.acceptButton}
        >
            <Text style={styles.buttonText}>Interested</Text>
        </TouchableOpacity>
    </View>
);
const button = {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 10,
    height: 40,
    padding: 10,
};
const styles = StyleSheet.create({
    buttonView: {
        flex: 1,
        flexDirection: "row",
        width: windowWidth * 0.5,
        justifyContent: "space-evenly",
        padding: 10,
    },
    buttonText: {
        fontFamily: "tahoma bold",
        fontSize: 20,
        color: "white"
    },
    acceptButton: {
        ...button,
        backgroundColor: "green"
    },
    declineButton: {
        ...button,
        backgroundColor: "red"
    }
});



export default EventSelectionButtons;