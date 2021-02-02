import React from 'react'
import { Text, View } from 'react-native'
import IconBtn from '../components/IconBtn'

export default function Header() {
    return (
        <View style={{
            width: '100%', height: 56,
            backgroundColor: '#ddd',
            flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center', elevation: 20,
        }}>
            <IconBtn icon='bars' />
            <Text style={{ color: '#777', fontWeight: 'bold', fontSize: 32, }}>
                Diário
            </Text>
            <IconBtn icon='question-circle' />
        </View>
    )
}