import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { firebase } from "./utils/firebase";
import EventSelectorScreen from "./screens/EventSelectorScreen";
import EventEndScreen from "./screens/EventEndScreen";
import UserContext from "./utils/UserContext";
import EventsContext from "./utils/EventsContext";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [eventsSelected, setEventsSelected] = useState({ "Yes": [], "No": [] });

  return (
    <UserContext.Provider value={user}>
      <EventsContext.Provider value={eventsSelected}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="EventSelectorScreen"
              component={EventSelectorScreen}
              options={{ title: "Event Selectors" }}
            />
            <Stack.Screen
              name="EventEndScreen"
              component={EventEndScreen}
              options={{ title: "Event End" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </EventsContext.Provider>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});
