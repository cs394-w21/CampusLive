import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { windowWidth } from "../constants/WindowSize";
import { textFont } from "../constants/Styles";

const EventSelectionButtons = ({ handleEventChoice }) => (
  <View style={styles.buttonView}>
    <TouchableOpacity
      onPress={() => handleEventChoice(false)}
      title="no"
      type="submit"
      name="btn"
      value="No"
      style={styles.declineButton}
    >
      <Text style={styles.buttonText}>Not Interested</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => handleEventChoice(true)}
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
// TODO: move this to the styles file
const button = {
  flex: 1,
  borderRadius: 5,
  justifyContent: "flex-end",
  alignItems: "center",
  margin: 10,
  height: 40,
  padding: 10,
};
// TODO: Change button sizes
const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    flexDirection: "row",
    width: windowWidth * 0.5,
    justifyContent: "space-evenly",
    padding: 10,
  },
  buttonText: {
    fontFamily: textFont,
    fontSize: 20,
    color: "white",
  },
  acceptButton: {
    ...button,
    backgroundColor: "green",
  },
  declineButton: {
    ...button,
    backgroundColor: "red",
  },
});

export default EventSelectionButtons;
