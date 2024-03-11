import { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import {StatusBar} from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

const App = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	}

	const endAddGoalHandler = () => {
		setModalIsVisible(false);
	}



	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{text: enteredGoalText, id: Math.random().toString()},
		]);
		endAddGoalHandler(); 
	}

	const deleteGoalHandler = (id) => {
		setCourseGoals(currentCourseGoals => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	}

  return (
		<>
		<StatusBar style='light'/>
    <View style={styles.appContainer}>
			<Button
				title='Add New Goal'
				color='#5e0acc'
				onPress={startAddGoalHandler} />
      <GoalInput
				onAddGoal={addGoalHandler}
				onCancel={endAddGoalHandler}
				visible={modalIsVisible} />
			<View style={styles.itemContainer}>
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
		</>
  );
}


export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
		paddingTop: 50,
		padding: 16,
  },
	itemContainer: {
		flex: 5,
	},
})
