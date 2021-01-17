import React from "react";
import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  Alert,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Field = ({ value }) => {
  return (
    <View style={styles.fields}>
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
        <Field value={event.title} />
        <Field value={event.time} />
        <Field value={event.location} />
        <Field value={event.description} />
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
    width: windowWidth*0.8,
    marginTop: 50

  },
  fields:{
    padding: 10
  },
  buttonView:{
    flex:1,
    flexDirection: "row",
    width: windowWidth*0.5,
    justifyContent: 'space-evenly',
    padding: 10
  },
});

export default EventDetails;
