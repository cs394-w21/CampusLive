import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Banner = () => {
    return ( <View style={styles.header}>
        <Text style={styles.headerText}>
          {'Northwestern Events'}
        </Text>
      </View>);
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: '#4E2A84',
      width: windowWidth,
    },
    headerText:{
      fontFamily:'campton',
      fontSize: 32,
      padding: 10,
      color: 'white',
    },
  });

export default Banner;