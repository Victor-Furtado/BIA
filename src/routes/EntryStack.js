import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import IconBtn from '../components/IconBtn';
import MainScreen from './MainTabs';
import EntryScreen from '../pages/EntryScreen';
import SOS from '../pages/SOS';

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="MainScreen"
        screenOptions={{
            headerRight: _ => <IconBtn icon='question-circle' />,
            headerStyle: {
                backgroundColor: '#ddd',
            },
            headerTintColor: '#777',
            headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 24,
                textAlignVertical: 'center'
            },
        }}
    >
        <Stack.Screen
            name="MainScreen"
            options={{
                headerShown: false,
            }}
            component={MainScreen}
        />
        <Stack.Screen
            name="NewEntry"
            options={{
                title: 'Nova Entrada',
            }}
            component={EntryScreen}
        />
        <Stack.Screen
            name="SOS"
            options={{
                title: 'SOS',
            }}
            component={SOS}
        />
    </Stack.Navigator>
)