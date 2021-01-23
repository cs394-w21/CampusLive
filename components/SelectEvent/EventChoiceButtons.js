import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { textFont } from "../../constants/Styles";

const EventChoiceButton = ({ text, choice, handleEventChoice, buttonType }) => {
  return (
    <TouchableOpacity
      onPress={() => handleEventChoice(choice)}
      style={
        buttonType === "accept" ? styles.acceptButton : styles.declineButton
      }
    >
      <Text numberOfLines={1} style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const EventChoiceButtons = ({ handleEventChoice }) => (
  <View style={styles.buttonView}>
    <EventChoiceButton
      text="Not Interested"
      choice={false}
      handleEventChoice={handleEventChoice}
      buttonType="decline"
    />
    <EventChoiceButton
      text="Interested"
      choice={true}
      handleEventChoice={handleEventChoice}
      buttonType="accept"
    />
  </View>
);
// TODO: move this to the styles file
const choiceButton = {
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
});

export default EventChoiceButtons;
