import { useState } from 'react';
import { View, Modal, TextInput, Button, StyleSheet } from 'react-native';


const GoalInput = (props) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	}

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	} 

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.goalInputContainer}>
				<TextInput
					style={styles.inputText}
					placeholder='Your goal ...'
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<Button title='ADD GOAL' onPress={addGoalHandler} />
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
    goalInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50,
        padding: 16,
    },
    inputText: {
        margin:5,
        padding: 5,
        borderWidth: 2,
        borderColor: '#808080',
        width: '70%',
    },
});

export default GoalInput;