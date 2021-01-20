import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import AcceptedEvents from '../components/AcceptedEvents';
import Banner from "../components/Banner";

const EventSelectorScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Banner />
            <AcceptedEvents />
            <StatusBar style="auto" />
        </SafeAreaView>
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

export default EventSelectorScreen;