import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RandomNumber from './RandomNumber';

const Game = ({randomNumberCount}) => {
  const randomNumbers = Array.from({length: randomNumberCount}).map(
    () => 1 + Math.floor(Math.random() * 10),
  );
  const target = randomNumbers
    .slice(0, randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>

      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNum, idx) => (
          <RandomNumber key={idx} number={randomNum} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 30,
  },
  target: {
    fontSize: 50,
    backgroundColor: '#ddd',
    marginHorizontal: 50,
    textAlign: 'center',
    margin: 50,
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default Game;
