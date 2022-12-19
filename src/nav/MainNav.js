import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import End from '../page/End';
import Main from '../page/Main';
import Quiz from '../page/Quiz';
import Ranking from '../page/Ranking';
import Note from '../page/Note';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: '',
        title: '',
        headerShown:false,
      }}
      initialRouteName="Main"
    >
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="end" component={End} />
      <Stack.Screen name="quiz" component={Quiz} />
      <Stack.Screen name="ranking" component={Ranking} />
      <Stack.Screen name="note" component={Note} />
    </Stack.Navigator>
  );
};

export default MainNav;
