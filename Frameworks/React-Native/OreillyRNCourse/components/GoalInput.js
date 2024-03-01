import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput  = (props) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
			  style={styles.textInputContainer}
				placeholder='Your current goal'
				onChangeText={goalInputHandler}
				value={enteredGoalText}
			/>
			<Button
			  title='ADD GOAL'
				onPress={props.onAddGoal}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc'
    },
    textInputContainer: {
      width: '70%',
      borderWidth: 1,
      borderColor: '#cccccc',
      padding: 6,
      marginRight: 6,
    },
  });


export default GoalInput;