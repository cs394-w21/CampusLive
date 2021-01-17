import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
} from "react-native";
import {  Entypo,} from '@expo/vector-icons';

const EventFields = ({ textValue, iconValue }) => {
    return (
      <View style={styles.fields}>
        <Entypo name={iconValue} size={20} color="black" /> 
        <Text>{textValue}</Text>
      </View>
    );
  };

  


const styles = StyleSheet.create({
    fields:{
      padding: 10,
      flex:1,
      flexDirection: "row",
    },
  });

export default EventFields;