import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useFormikContext } from 'formik';

import Colors from './colors';

export default function FormSwitch({name, title, onChange = x => x, ...otherProps}) {
  const { values, setFieldValue } = useFormikContext();
  const value = values[name];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch
        value={value}
        onValueChange={(newValue) => {
          onChange(newValue);
          setFieldValue(name, newValue);
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginRight: 5,
  },
});