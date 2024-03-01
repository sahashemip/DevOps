import { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from './components/GoalInput';
import GoalInput from './components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        {text: enteredGoalText, id: Math.random().toString()},
      ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={addGoalHandler}
      />

      <View style={styles.textContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceHorizontal={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, 
    padding: 50,
    paddingHorizontal: 16,
  },
  textContainer: {
    flex: 5,
  },
});


export default App;