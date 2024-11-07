import { StyleSheet, View, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';

GoalItem.propTypes = {
  text: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func,
  id: PropTypes.string.isRequired
};

export function GoalItem({text, onDeleteItem, id }) {
  return (
    <View
      style={styles.goalItem}>
      <Pressable android_ripple={{color: '#dddddd'}}
        style={({pressed})=> pressed && styles.pressed }
        onPress={() => onDeleteItem(id)}>
        <Text style={styles.textGoal}>
          {text}
        </Text>
      </Pressable>
    </View>)
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5aec'
  },
  textGoal: {
    padding: 8,
    color: 'white'
  },
  pressed: {
    opacity: 0.5
  }
});