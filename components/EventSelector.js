import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text,
} from "react-native";

const Field = ({ value }) => {
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

const EventSelector = ({ event }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <Field style={styles.fields} value="Some Event" />
        <Field style={styles.fields} value="Today" />
        <Field style={styles.fields} value="Tech" />
        <Field style={styles.fields} value="Description" />
        <View style={styles.buttonView}>
          <Button title="no" type="submit" name="btn" value="No"/>
          <Button title="yes" type="submit" name="btn" value="Yes"/>
        </View>
        
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
    borderColor: "black",
    borderWidth: 5,
    margin: 10,
    width: 100

  },
  fields:{
    margin: 10
  },
  buttonView:{
    flex:1,
    flexDirection: "row",

  },
});

export default EventSelector;
