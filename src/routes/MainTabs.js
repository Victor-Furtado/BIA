import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from '../screens/MainScreen';

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
    >
        <Tab.Screen name='Diário' component={MainScreen} />
    </Tab.Navigator>
)