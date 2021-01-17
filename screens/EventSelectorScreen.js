import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import EventSelector from "../components/EventSelector";
import {firebase} from "../utils/firebase";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const EventSelectorScreen = ({ navigation }) => {
  const [events, setEvents] = useState();
  
  useEffect(() => {
    console.log("attempting to get data")
    const db = firebase.database().ref();
    const handleData = snap => {
      if (snap.val()) setEvents(snap.val().events);
    }
    db.on('value', handleData, error => alert(error));
    console.log("received data")
    return () => { db.off('value',handleData); };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {'Northwestern Events'}
        </Text>
      </View>
      
      <EventSelector events = {events} navigation={navigation}/>
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

export default EventSelectorScreen;