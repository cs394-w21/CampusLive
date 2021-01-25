import React, { useState, useEffect } from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { firebase } from "./utils/firebase";
import UserContext from "./utils/UserContext";
import EventsContext from "./utils/EventsContext";
import SelectEventScreen from "./screens/SelectEventScreen";
import DisplayEventScreen from "./screens/DisplayEventScreen";
import CreateEventScreen from "./screens/CreateEventScreen";
import CalendarScreen from "./screens/CalendarScreen";

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
enableScreens();

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
          <Tab.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#4E2A84",
              },
              headerTitle: "CampusLive",
              headerLeft: null,
              headerTintColor: "#fff",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 32,
              },
            }}
            tabBarOptions={{ showIcon: true }}
            initialRouteName="CreateEventScreen"
          >
            <Tab.Screen
              name="SelectEventScreen"
              component={SelectEventScreen}
              options={{
                title: "Feed",
                tabBarIcon: () => (
                  <Entypo name="images" size={20} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="DisplayEventScreen"
              component={DisplayEventScreen}
              options={{
                title: "My Events",
                tabBarIcon: () => (
                  <Entypo name="calendar" size={20} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="CreateEventScreen"
              component={CreateEventScreen}
              options={{
                title: "New Event",
                tabBarIcon: () => (
                  <Entypo name="plus" size={20} color="black" />
                ),
              }}
            />
            <Tab.Screen
              name="CalendarScreen"
              component={CalendarScreen}
              options={{
                title: "Your Event Calendar",
                tabBarIcon: () => (
                  <Entypo name="calendar" size={20} color="red" />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </EventsContext.Provider>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});
