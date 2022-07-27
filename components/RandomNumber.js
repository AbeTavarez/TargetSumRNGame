import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const RandomNumber = ({number}) => {
  const handlePress = () => console.log(number);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.touch}>
      <Text style={styles.random}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  random: {
    fontSize: 72,
    width: 100,
    marginHorizontal: 15,
    backgroundColor: 'red',
    margin: 20,
    textAlign: 'center',
  },
  touch: {
    margin: 15,
  },
});

export default RandomNumber;
