import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleStatus } from '../redux/todoSlice';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const TodoItem = (props) => {
    const dispatch = useDispatch()
    const { numberic, name, date, onPress, id, status } = props
  
    const handleToggleCheckBox = () => {
        dispatch(toggleStatus({
            id: id,
        }));
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            <View style={styles.row1}>
                <View style={styles.title}>
                    <Text style={styles.Text}>#{numberic}</Text>
                    <Text style={styles.Text}>{name}</Text>
                </View>

                <CheckBox
                    disabled={false}
                    value={status}
                    onValueChange={handleToggleCheckBox}
                />
            </View>
            <Text style={styles.Text}>{date}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 25,
        borderRadius: 5,
        marginVertical: 5
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Text: {
        fontSize: 18,
        color: '#333',
        margin: 3
    },
    title: {
        flexDirection: 'row'
    }
})
export default TodoItem;