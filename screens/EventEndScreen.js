import React, { useContext } from "react";
import { Button, StyleSheet, SafeAreaView, View } from "react-native";
import Field from "../components/Field";
import EventsContext from "../utils/EventsContext";

const EventEndScreen = ({ navigation, route }) => {
  const events = useContext(EventsContext).events;
  const buttonPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Field value="No more events to view. Click to look through events again."></Field>
        <Button
          style={styles.button}
          onPress={buttonPress}
          title="Swipe again"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#E4E0EE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EventEndScreen;
