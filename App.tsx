import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Keyboard } from 'react-native';

export default function App() {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [guessCount, setGuessCount] = useState(0);

  const handleGuess = () => {
    const numericGuess = parseInt(guess);
    if (isNaN(numericGuess)) {
      setFeedback('Please enter a valid number!');
      return;
    }

    setGuessCount(guessCount + 1);

    if (numericGuess < secretNumber) {
      setFeedback('Too low! Try again.');
    } else if (numericGuess > secretNumber) {
      setFeedback('Too high! Try again.');
    } else {
      setFeedback("Congratulations! You've guessed the correct number!");
    }

    setGuess('');
    Keyboard.dismiss();
  };

  const restartGame = () => {
    setSecretNumber(generateRandomNumber());
    setGuess('');
    setFeedback('');
    setGuessCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mystery Number Challenge</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your guess (1-100)"
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
      />

      <TouchableHighlight style={styles.button} underlayColor="#555" onPress={handleGuess}>
        <Text style={styles.buttonText}>Submit Guess</Text>
      </TouchableHighlight>

      <Text style={styles.feedback}>{feedback}</Text>
      <Text style={styles.counter}>Guesses: {guessCount}</Text>

      <TouchableHighlight style={styles.restartButton} underlayColor="#777" onPress={restartGame}>
        <Text style={styles.restartText}>Restart Game</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0D6EFD',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  feedback: {
    fontSize: 16,
    marginTop: 15,
    fontWeight: '600',
  },
  counter: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
  restartButton: {
    marginTop: 20,
    backgroundColor: '#6C757D',
    padding: 10,
    borderRadius: 5,
  },
  restartText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
