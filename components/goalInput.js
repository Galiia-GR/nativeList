import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"
import PropTypes from 'prop-types';

GoalInput.propTypes = {
  addGoal: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isVisible: PropTypes.bool
};

export function GoalInput({addGoal, isVisible, onCancel}) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    addGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
  <Modal visible={isVisible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image style={styles.image}
        source={require('../assets/images/collars.png')}
      />
      <TextInput style={styles.textInput}
        placeholder='напиши на мне...'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button title='нажми меня' onPress={addGoalHandler}/>
      </View>
      <View style={styles.button}>
        <Button title='отмени меня' color={'#cccddd'} onPress={onCancel}/>
      </View>
    </View>
  </View>
</Modal>)
};

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: '#185a9d'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: 'white',
    width: '65%',
    padding: 8,
    borderRadius: 6
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: 'row',
    gap: 2,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  button: {
    width: '32%',
  }
});