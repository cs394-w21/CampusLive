import React, { useContext } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import EventsContext from "../../utils/EventsContext";
import { textFont, eventCard } from "../../constants/Styles";
import { windowWidth } from "../../constants/WindowSize";

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
      <TitleField value="No events to view." />
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          onPress={viewAgainPress}
          title="Swipe again"
          disabled={true}
        />
      </View>
    </View>
  );
};

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
    justifyContent: "space-evenly",
    padding: 10,
  },
  button: {
    width: 6,
  },
});

export default EventEnd;
