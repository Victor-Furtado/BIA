import React from 'react'
import { View } from 'react-native'
import Calendar from '../components/Calendar'
import FlatBtn from '../components/FlatBtn'

export default () => {
    return (
        <View style={{ margin: 20 }}>
            <FlatBtn label='Nova Entrada no Diário' icon='+' />
            <Calendar />
            <FlatBtn clear label='Ver estatísticas' icon='&#x1F4CA;' />
        </View>
    )
}
