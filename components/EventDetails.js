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
import Field from "../components/Field.js"
import EventFields from "../components/EventFields.js"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TitleField = ({ value }) => {
  return (
    <View >
      <Text style={styles.title}>{value}</Text>
    </View>
  );
};


const EventDetails = ({ event, eventIndex, updateEvent }) => {
  const onNoPress = () => {
    updateEvent();
  }
  const onYesPress = () => {
    updateEvent();
  }
  

  return (
      <View style={styles.container}>
        <TitleField value={event.title} />
        <EventFields textValue={event.time} iconValue = "calendar"/>
        <EventFields textValue={event.location} iconValue = "location-pin" />
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
  title:{
    color:'#4E2A84',
    fontFamily:'campton',
    fontSize: 40
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
