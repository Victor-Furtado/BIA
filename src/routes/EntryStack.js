import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import IconBtn from '../components/IconBtn';
import MainScreen from './MainTabs';
import EntryScreen from '../pages/EntryScreen';

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="MainScreen"
        screenOptions={{
            headerRight: _ => <IconBtn icon='❔' />,
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
                headerLeft: _ => <IconBtn clear icon='❖' />,
                title: 'DIÁRIO',
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
    </Stack.Navigator>
)