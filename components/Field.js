import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
} from "react-native";

const Field = ({ value }) => {
    return (
      <View style={styles.fields}>
        <Text>{value}</Text>
      </View>
    );
  };

  


const styles = StyleSheet.create({
    fields:{
      padding: 10
    },

  });

export default Field;