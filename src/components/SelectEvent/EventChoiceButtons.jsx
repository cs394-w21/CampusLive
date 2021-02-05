import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { textFont } from "../../constants/Styles";

const EventChoiceButton = ({ icon, choice, handleEventChoice, buttonType}) => (
  <TouchableOpacity
    onPress={() => handleEventChoice(choice)}
    style={buttonType === "accept" ? styles.acceptButton : styles.declineButton}
  >
    <Entypo name={icon} size={20} color="white" style={styles.icon} />
  </TouchableOpacity>
);

const EventChoiceButtons = ({ handleEventChoice }) => (
  <View style={styles.buttonView}>
    <EventChoiceButton
      icon="cross"
      choice={false}
      handleEventChoice={handleEventChoice}
      buttonType="decline"
    />
    <EventChoiceButton
      icon="check"
      choice
      handleEventChoice={handleEventChoice}
      buttonType="accept"
    />
  </View>
);
// TODO: move this to the styles file
const choiceButton = {
  flex: 1,
  marginTop: 0,
  margin: 40,
  padding: 10,
  elevation: 2,
  width: 80,
  height: 80,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 40,
  backgroundColor: "orange",
  opacity: 0.8,
};

// TODO: Change button sizes
const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  buttonText: {
    fontFamily: textFont,
    fontSize: 20,
    color: "white",
  },
  acceptButton: {
    ...choiceButton,
    backgroundColor: "green",
  },
  declineButton: {
    ...choiceButton,
    backgroundColor: "red",
  },
  icon: {
    fontSize: 35,
  },
});

export default EventChoiceButtons;
