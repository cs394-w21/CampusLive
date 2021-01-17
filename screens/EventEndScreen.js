import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions
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

const EventEndScreen = ({  }) => {
  return (
    <View>
    <Field value= "No more events to view" >
    </Field>
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

export default EventEndScreen;

