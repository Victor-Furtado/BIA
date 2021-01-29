import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function FlatBtn({ label, icon, onPress, style, clear, square }) {
    return (
        <TouchableOpacity
            style={[{
                //marginHorizontal: 100,
                padding: 8,
                width: square ? 100 : 'auto',
                height: square ? 100 : 'auto',
                flexDirection: clear ? 'row-reverse' : (square ? 'column-reverse' : 'row'),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: clear ? null : '#ccc',
                borderRadius: 25,
            },style]}
            onPress={onPress}
        >
            <Text style={{ marginHorizontal: 5, fontSize: square ? 12 : 18, color: clear ? '#C4E' : 'black', textDecorationLine: clear ? 'underline' : null }}>{label}</Text>
            <Text style={{ marginHorizontal: 5, fontSize: square ? 40 : 18, color: clear ? '#C4E' : 'black' }}>{icon}</Text>
        </TouchableOpacity>
    )
}
