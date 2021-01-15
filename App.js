import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import EventSelector from "./components/EventSelector";
import eventsData from "./public/eventsData";

export default function App() {
  const [events, setEvents] = useState(eventsData.events);

  return (
    <View style={styles.container}>
      <Text>
        {eventsData.title}
      </Text>
      <EventSelector events = {events}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hamilton: {
    color: "#00f",
  },
  megs: {
    color: "#f0f",
  },
});
