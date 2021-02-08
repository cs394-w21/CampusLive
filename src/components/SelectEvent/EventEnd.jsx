import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { textFont, eventCard } from "../../constants/Styles";
import { windowWidth, windowHeight } from "../../constants/WindowSize";

const TitleField = ({ value }) => (
  <View>
    <Text style={styles.title}>{value}</Text>
  </View>
);

const SwipeAgainButton = ({ text, style, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={style}
  >
    <Text style={styles.buttonText}>
      {text}
    </Text>
  </TouchableOpacity>
);

const EventEnd = ({ viewAgainPress }) => (
  <View style={styles.container}>
    <TitleField value="No events left to view." />
    <Text style={styles.subHeader}>
      Swipe again on...
    </Text>
    <View style={styles.buttonView}>
      <SwipeAgainButton
        onPress={() => viewAgainPress(null)}
        text="All events"
        style={styles.allButton}
      />
      <SwipeAgainButton
        onPress={() => viewAgainPress(false)}
        text="Events you missed"
        style={styles.missedButton}
      />
      <SwipeAgainButton
        onPress={() => viewAgainPress(true)}
        text="Events you liked"
        style={styles.acceptedButton}
      />
    </View>

  </View>
);

const buttonStyle = {
  flex: 1,
  marginTop: 0,
  margin: 25,
  padding: 10,
  elevation: 2,
  height: 100,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 40,
  opacity: 0.8,
  width: 200
}

const styles = StyleSheet.create({
  container: { ...eventCard },
  title: {
    color: "#4E2A84",
    fontFamily: textFont,
    fontSize: 40,
    marginBottom: 10
  },
  subHeader: {
    color: "#4E2A84",
    fontFamily: textFont,
    fontSize: 30,
  },
  buttonView: {
    flex: 1,
    flexDirection: "column",
    width: windowWidth * 0.5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    maxHeight: windowHeight * .4
  },
  buttonsView: {
    flex: 1,
  },
  allButton: {
    ...buttonStyle,
    backgroundColor: "purple",
  },
  missedButton: {
    ...buttonStyle,
    backgroundColor: "red",
  },
  acceptedButton: {
    ...buttonStyle,
    backgroundColor: "green",
  },
  buttonText: {
    fontFamily: textFont,
    fontSize: 20,
    color: "white",
    margin: 5
  },
});

export default EventEnd;
