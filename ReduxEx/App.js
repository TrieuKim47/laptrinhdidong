import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoList from './Screens/TodoList';
import Detail from './Screens/Detail';
import {Provider} from 'react-redux'
import { store } from './redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="TodoList" screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="TodoList" component={TodoList}
          />
          <Stack.Screen
            name="Detail" component={Detail}
          />
        </Stack.Navigator>
      </Provider>
        

    </NavigationContainer>
  );
};
export default App;