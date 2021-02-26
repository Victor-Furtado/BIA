import React, { useEffect } from 'react'
import { View } from 'react-native'
import Calendar from '../components/Calendar'
import FlatBtn from '../components/FlatBtn'
import Header from '../components/Header'

export default ({ navigation, skip }) => {

    useEffect(() => {
        if (skip) navigation.navigate('NewEntry');
    })

    return (
        <>
            <Header text='Diário' />
            <View style={{ flex: 1, margin: 20, justifyContent: 'space-evenly' }}>
                <FlatBtn label='Nova Entrada no Diário' icon='calendar-plus' onPress={_ => navigation.navigate('NewEntry')} />
                <Calendar onPress={date => navigation.navigate('NewEntry', { date: date })} />
                <FlatBtn clear label='Ver estatísticas' icon='chart-pie' />
            </View>
        </>
    )
}
