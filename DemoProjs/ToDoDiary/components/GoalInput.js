import { useState } from "react";
import {
  View,
  Modal,
  TextInput,
  Button,
  Image,
  Text,
  StyleSheet,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    const currentDate = new Date().toLocaleString();
    const textToDislay = enteredGoalText + " " + "(" + currentDate + ")";
    props.onAddGoal(textToDislay);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.goalInputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Your goal ..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          textc
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  goalInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 24,
  },
  inputText: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
