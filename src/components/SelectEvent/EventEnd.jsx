import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { textFont, eventCard } from "../../constants/Styles";
import { windowWidth, windowHeight } from "../../constants/WindowSize";

const TitleField = ({ value }) => (
  <View>
    <Text style={styles.title}>{value}</Text>
  </View>
);

const EventEnd = ({ viewAgainPress }) => (
  <View style={styles.container}>
    <TitleField value="No events to view." />
    <View style={styles.buttonView}>
      <Button
        style={styles.button}
        onPress={viewAgainPress}
        title="Swipe again"
        disabled
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { ...eventCard },
  title: {
    color: "#4E2A84",
    fontFamily: textFont,
    fontSize: 40,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    width: windowWidth * 0.5,
    justifyContent: "center",
    padding: 10,
    maxHeight: 50
  },
  button: {
    width: 6,

  },
});

export default EventEnd;
