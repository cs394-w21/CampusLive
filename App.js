import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import EventSelector from "./components/EventSelector";
import eventsData from "./public/eventsData";
import {firebase} from "./utils/firebase";
import EventSelectorScreen from "./screens/EventSelectorScreen";
import EventEndScreen from "./screens/EventEndScreen";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="EventSelectorScreen"
            component={EventSelectorScreen}
            // options={{ title: "Event Selectors" }}
            options={({ navigation }) => ({
              title: "Event Selectors"
            })}
          />
          <Stack.Screen
            name="EventEndScreen"
            component={EventEndScreen}
            // options={{ title: "Event End" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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