import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function IconBtn({ clear = false, icon }) {
    return (
        <TouchableOpacity
            style={{
                marginHorizontal: 20,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Icon name={icon} size={24} />
        </TouchableOpacity>
    )
}
