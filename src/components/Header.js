import React from 'react'
import { Text, View, StaturBar } from 'react-native'
import IconBtn from '../components/IconBtn'

export default function Header({ title }) {
    return (
        <View style={{
            width: '100%', height: 56,
            backgroundColor: '#ddd',
            flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center', elevation: 20,
        }}>
        	<StatusBar backgroundColor="#777" />
            <IconBtn icon='bars' />
            <Text style={{ color: '#777', fontWeight: 'bold', fontSize: 32, }}>
                {title}
            </Text>
            <IconBtn icon='question-circle' />
        </View>
    )
}