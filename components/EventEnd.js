import React, { useContext } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { windowWidth } from "../constants/WindowSize";
import EventsContext from "../utils/EventsContext";

const TitleField = ({ value }) => {
  return (
    <View>
      <Text style={styles.title}>{value}</Text>
    </View>
  );
};

const EventEnd = ({ navigation, viewAgainPress }) => {
  return (
    <View style={styles.container}>
      <TitleField value="No more events to view. Swipe through rejected events again." />
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          onPress={viewAgainPress}
          title="Swipe again"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 10,
    width: windowWidth * 0.8,
    marginTop: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    padding: 15,
  },
  title: {
    color: "#4E2A84",
    fontFamily: "campton",
    fontSize: 40,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    width: windowWidth * 0.5,
    justifyContent: "space-evenly",
    padding: 10,
  },
  button: {
    width: 6,
  },
});

export default EventEnd;
