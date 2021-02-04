import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { textFont } from "../../constants/Styles";
import { windowWidth } from "../../constants/WindowSize";
import { formatTimeRangeToString } from "../../utils/Dates";

const EventCalendarItem = ({ event, expanded }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Entypo name="qq" size={20} color="#4e2a84" style={styles.icon} />
      <Text style={styles.eventTitle}>{event.title} </Text>
      <View style={styles.hostContainer}>
        <Text style={styles.hostStyle}>hosted by </Text>
        <Text style={styles.hostNameStyle}>{event.host}</Text>
      </View>
    </View>
    <Text>
      {formatTimeRangeToString(event.startDateTime, event.endDateTime)}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    borderRadius: 5,
    marginHorizontal: windowWidth * 0.1,
    width: windowWidth * 0.8,
    marginVertical: Math.min(25, windowWidth * 0.1),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    padding: 15,
    height: 75,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  eventTitle: {
    fontFamily: textFont,
    fontSize: 20,
    fontWeight: "bold",
    color: "#4e2a84",
  },
  icon: {
    marginRight: 10,
  },
  hostStyle: {
    textAlign: "center",
    fontFamily: textFont,
    textAlignVertical: "center",
  },
  hostNameStyle: {
    textAlign: "center",
    fontFamily: textFont,
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  hostContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default EventCalendarItem;
