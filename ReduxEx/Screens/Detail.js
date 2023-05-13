import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment';
import { addTodo, updateTodo } from '../redux/todoSlice';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
const Detail = (props) => {
    const dispatch = useDispatch()
    const { navigation, route } = props

    const [toggleCheckBox, setToggleCheckBox] = useState(route.params.id ? route.params.status : false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(route.params.id ? route.params.date : moment().format('DD-MM-yyyy'));
    const [name, setName] = useState(route.params.id ? route.params.name : '')
    const [des, setDes] = useState(route.params.id ? route.params.des : '')

    const handleSaveClick = () => {
        route.params.id ?
            (dispatch(updateTodo({
                id: route.params.id,
                name: name,
                date: date,
                des: des,
                status: toggleCheckBox
            })), navigation.navigate('TodoList'),
            ToastAndroid.showWithGravity(
                'Update todo successfully',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            ))
            : (dispatch(addTodo({
                id: uuidv4(),
                name: name,
                date: date,
                des: des,
                status: toggleCheckBox
            })
            ), navigation.navigate('TodoList'),
                ToastAndroid.showWithGravity(
                    'Add new todo successfully',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                ))

    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const formattedDate = moment(date).format('DD-MM-yyyy');
        setDate(formattedDate);
        hideDatePicker();
    };
    const handleName = (text) => {
        setName(text)
    }
    const handleDes = (text) => {
        setDes(text)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo</Text>
            <Text style={styles.text}>Title</Text>
            <TextInput onChangeText={handleName} value={name} style={styles.input} />
            <Text style={styles.text}>Description</Text>
            <TextInput onChangeText={handleDes} value={des} style={styles.input} />
            <Text style={styles.text}>Time</Text>
            <TouchableOpacity
                onPress={showDatePicker}
                style={styles.input}>
                <Text style={styles.date}>{date}</Text>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </TouchableOpacity>
            <View style={styles.chkrow}>
                <Text style={styles.ckhtext}>Mask as done</Text>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
            </View>
            <TouchableOpacity
                onPress={handleSaveClick}
                style={styles.btnSave}>
                <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        alignSelf: 'center'
    },
    input: {
        borderWidth: 1,
        marginHorizontal: 20,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        fontSize: 18
    },
    text: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20

    },
    date: {
        fontSize: 16,
        color: '#333'
    },
    chkrow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        alignSelf: 'center'
    },
    ckhtext: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    btnSave: {
        backgroundColor: '#24d3aa',
        width: 200,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default Detail;