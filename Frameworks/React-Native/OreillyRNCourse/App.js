import { useState } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  FlatList
} from "react-native";


const App = () => {
  const [goalText, setGoalText] = useState("");
  const [goalItem, setGoalItem] = useState([]);

  const goalTextHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const goalItemHandler = () => {
    setGoalItem((currentGoalItems) => [
      ...currentGoalItems,
      {text: goalText, key: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Your goal is ..."
          onChangeText={goalTextHandler}
        />
        <View style={styles.buttonContainer}>
          <Button color="purple" title="ADD GOAL" onPress={goalItemHandler} />
        </View>
      </View>
  
      <View style={styles.itemContainer}>
        <FlatList style={styles.flatlist}
          data={goalItem}
          renderItem={itemData => {
            return (
              <Text style={styles.goalItems}>
                {itemData.item.text}
              </Text>
            );
          }}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#7944AD'
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    borderColor: "gray",
    borderWidth: 1,
    width: "70%",
    padding: 8,
    backgroundColor: "yellow",
    borderRadius: 8,
  },
  buttonContainer: {
    paddingLeft: 8,
  },
  itemContainer: {
    flex: 10,
    alignItems: "center",
    borderRadius: 8,
    
  },
  goalItems: {
    borderColor: 'gray',
    borderWidth: 2,
    margin: 4,
    padding: 8,
    backgroundColor: '#44A4AD',
    borderRadius: 8,
  },
  flatlist: {
    flex: 1,
    width: '75%',
  }
});
