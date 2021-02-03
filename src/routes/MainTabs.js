import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MainScreen from '../pages/MainScreen';

const Tab = createBottomTabNavigator();

// DELETE LATER
import { Text, View } from 'react-native';
function SIMSCREEN() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>JUST A TEST</Text>
        </View>
    );
}



export default function App() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Nova Entrada')
                        return <Icon name='plus-circle' color={color} size={size * 2} style={{ bottom: 16, backgroundColor: 'white', borderRadius: 25 }} />
                    else
                        return <View style={{ width: size, height: size, borderRadius: 25, backgroundColor: color }} />
                },
            })}
            tabBarOptions={{
                activeTintColor: '#C4E',
                inactiveTintColor: '#ccc',
            }}
        >
            <Tab.Screen name="Diário" component={MainScreen} />
            <Tab.Screen name="Dicas" component={SIMSCREEN} />
            <Tab.Screen name="Nova Entrada" component={SIMSCREEN} />
            <Tab.Screen name="Mistura" component={SIMSCREEN} />
            <Tab.Screen name="SOS" component={SIMSCREEN} />
        </Tab.Navigator>
    );
}