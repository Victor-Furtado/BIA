import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'

export default function RadioBtnGroup({ data, style, onChange }) {

    const [selected, setSelected] = useState('')

    const renderRadio = ({ item }) => (
        <TouchableOpacity
            onPress={_ => { setSelected(item); onChange(item) }}
            style={[{ marginRight: 20, padding: 10, borderRadius: 16, backgroundColor: '#ccc', borderWidth: item === selected ? 2 : 0, borderColor: 'black' }, style]}>
            <Text>{item.text}</Text>
        </TouchableOpacity>
    )

    return (
        <FlatList
            data={data}
            keyExtractor={i => i.id}
            horizontal
            renderItem={renderRadio}
            showsVerticalScrollIndicator={false}
        />
    )
}
