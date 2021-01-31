import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function IconBtn({ clear = false, icon }) {
    return (
        <TouchableOpacity
            style={[{
                marginHorizontal: 20,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
            }, clear ? {} : {
                backgroundColor: '#777',
                borderRadius: 25,
                borderWidth: 2,
                borderColor: '#000'
            }]}>
            <Text style={{ fontWeight: 'bold', fontSize: clear ? 24 : 16, }}>{icon}</Text>
        </TouchableOpacity>
    )
}
