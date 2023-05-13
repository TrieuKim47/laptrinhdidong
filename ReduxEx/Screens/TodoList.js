import { useSelector } from 'react-redux'
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import TodoItem from '../Component/TodoItem';

const TodoList = (props) => {
    const { navigation } = props
    const data = useSelector((state) => state.todo)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo</Text>
            <FlatList
                data={data}
                renderItem={({ item, index }) => <TodoItem
                    onPress={() => navigation.navigate('Detail',
                    {
                        id:item.id,
                        name: item.name,
                        des: item.des,
                        date: item.date,
                        status: item.status
                    })}
                    
                    name={item.name}
                    id = {item.id}
                    date={item.date}
                    status = {item.status}
                    numberic={index + 1}
                />}
                keyExtractor={(item, index) => index}
            />
            <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {date: new Date().toString()})}
            style={styles.btnAdd}>
                <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        alignSelf: 'center'
    },
    btnAdd:{
        backgroundColor:'#24d3aa',
        width:60,
        height:40,
        position:'absolute',
        bottom:30,
        right:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    btnText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30
    }
})
export default TodoList;