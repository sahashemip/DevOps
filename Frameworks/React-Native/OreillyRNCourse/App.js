import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInputContainer} placeholder='Your current goal'/>
        <Button title='ADD GOAL'/>
      </View>
      <View style={styles.textContainer}>
        <Text>List of goals ...</Text>
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
  textContainer: {
    flex: 5,
  }
});


export default App;