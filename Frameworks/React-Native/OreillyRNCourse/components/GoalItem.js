import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.goalItemContainer}>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItemContainer: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    itemText: {
        color: 'white'
    }
});

export default GoalItem;