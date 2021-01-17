import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import EventSelector from "./components/EventSelector";
import eventsData from "./public/eventsData";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  const [events, setEvents] = useState(eventsData.events);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {eventsData.title}
        </Text>
      </View>
      
      <EventSelector events = {events}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{

    backgroundColor: '#4E2A84',
    width: windowWidth,
  },
  headerText:{
    fontFamily:'campton',
    fontSize: 32,
    padding: 10,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
