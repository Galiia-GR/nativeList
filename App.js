import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { GoalItem } from './components/goaIItem';
import { GoalInput } from './components/goalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startNewGoal() {
    setModalVisible(true)
  }

  function endNewGoal() {
    setModalVisible(false)
  }

  function addGoal(enteredGoalText) {
    setGoals((currentGoals) => [...currentGoals,
      { text: enteredGoalText, id: Math.random().toString()}])
      endNewGoal();
  };

  function deleteGoal(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal)=> goal.id !== id)
    })

  }
  return (
  <>
    <StatusBar style='auto'/>
    <View style={styles.container}>
      <Button title='add new goal' color='#185a9d'
      onPress={startNewGoal}
      />
      {modalVisible && <GoalInput isVisible={modalVisible} addGoal={addGoal} onCancel={endNewGoal}/>}
      <View style={styles.box}>
        <FlatList data={goals} renderItem={(itemData) => {
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoal}/>
          )
        }} alwaysBounceVertical={false}
        keyExtractor={(item, index)=> {
          return item.id;
        }}/>
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 50,
    flex: 1,
  },
  text: {
    fontSize: 18,
    margin: 2,
  },
  box: {
    flex: 5
  }
});
