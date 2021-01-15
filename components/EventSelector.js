import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text,
} from "react-native";

const Field = ({ label, value }) => {
  return (
    <View>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const EventSelector = ({ event }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Field label="Title" value="Some Event" />
        <Field label="Meeting times" value="Today" />
        <Field label="Where" value="Tech" />
        <View>
          <Button type="submit" name="btn" value="No">
            No
          </Button>
          <Button type="submit" name="btn" value="Yes">
            Yes
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EventSelector;
