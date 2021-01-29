import React from 'react'
import { View, Text } from 'react-native'

export default function EntryHead({ value = 0 }) {
    const stages = ['Antes do consumo', 'Durante o consumo', 'Depois do consumo']

    const stage = value > stages.length ? 0 : value;

    const renderBreadCrumb = (index) => {
        return stages.map((_, i) => (
            <View key={i} style={{ marginRight: 10, width: 30, borderWidth: 3, borderRadius: 3, borderColor: i <= index ? '#C4E' : '#fff' }} />
        ))
    }

    return (
        <View style={{ height: 100, backgroundColor: '#ccc', justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 18, paddingHorizontal: 15 }}>{stages[stage]}</Text>
            <View style={{ flexDirection: 'row', padding: 15 }}>
                {renderBreadCrumb(stage)}
            </View>
        </View>
    )
}
