import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { firebase } from "./utils/firebase";
import EventSelectorScreen from "./screens/EventSelectorScreen";
import MyEventsScreen from "./screens/MyEventsScreen";
import UserContext from "./utils/UserContext";
import EventsContext from "./utils/EventsContext";

const Stack = createStackNavigator();
const adminUID = "admin";

export default function App() {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState();

  useEffect(() => {
    const db = firebase.database().ref("users").child(adminUID);
    const handleData = (snap) => {
      setUser({ uid: adminUID, ...snap.val() });
    };
    db.on("value", handleData, (error) => alert(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  });

  useEffect(() => {
    if (user && user.uid) {
      const db = firebase.database().ref("events");
      const handleData = (snap) => {
        const events = snap.val();
        if (events) {
          for (const eventChoice in user.events_choice) {
            events[eventChoice].choice = user.events_choice[eventChoice];
          }
          setEvents(events);
        }
      };
      db.on("value", handleData, (error) => alert(error));
      return () => {
        db.off("value", handleData);
      };
    } else {
      setEvents(null);
    }
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      <EventsContext.Provider value={{ events, setEvents }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="EventSelectorScreen"
              component={EventSelectorScreen}
              options={{ title: "Event Selectors" }}
            />
            <Stack.Screen
              name="MyEventsScreen"
              component={MyEventsScreen}
              options={{ title: "My Events" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </EventsContext.Provider>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});
