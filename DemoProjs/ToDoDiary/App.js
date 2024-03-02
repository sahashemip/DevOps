import { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

const App = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	}

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{text: enteredGoalText, id: Math.random().toString()},
		]);
	}

	const deleteGoalHandler = (id) => {
		setCourseGoals(currentCourseGoals => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	}

  return (
    <View style={styles.appContainer}>
			<Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} />
			<View>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								id={itemData.item.id}
								onDeleteItem={deleteGoalHandler}
							/>
						);
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
				/>
			</View>
    </View>
  );
}


export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  }
})
