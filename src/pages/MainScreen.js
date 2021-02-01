import React from 'react'
import { View } from 'react-native'
import Calendar from '../components/Calendar'
import FlatBtn from '../components/FlatBtn'

export default ({ navigation }) => {
    return (
        <View style={{ margin: 20 }}>
            <FlatBtn label='Nova Entrada no Diário' icon='+' onPress={_ => navigation.navigate('NewEntry')} />
            <Calendar onPress={console.log} />
            <FlatBtn clear label='Ver estatísticas' icon='&#x1F4CA;' />
        </View>
    )
}
