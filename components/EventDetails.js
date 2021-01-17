import React from "react";
import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  Alert,
} from "react-native";



const Field = ({ value }) => {
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

const EventDetails = ({ event, eventIndex, setEventIndex }) => {
  const onNoPress = () => {
    setEventIndex(eventIndex + 1);
  }
  const onYesPress = () => {
    setEventIndex(eventIndex + 1);
  }
  return (
      <View style={styles.container}>
        <Field style={styles.fields} value={event.title} />
        <Field style={styles.fields} value={event.time} />
        <Field style={styles.fields} value={event.location} />
        <Field style={styles.fields} value={event.description} />
        <View style={styles.buttonView}>
          <Button onPress = {onNoPress} title="no" type="submit" name="btn" value="No"/>
          <Button onPress ={onYesPress} title="yes" type="submit" name="btn" value="Yes"/>
        </View>
        
        </View>
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

export default EventDetails;
