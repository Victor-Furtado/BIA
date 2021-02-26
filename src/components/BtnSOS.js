import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function BtnSOS({ title, actualPage, onPress }) {

    const changeColor = {
        style: actualPage === title ? styles.btnActive : styles.btnOff
    }

    const changeColorText = {
        style: actualPage === title ? styles.textActive : styles.textOff
    }

    return (
      
        <View {...changeColor} >
             <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center'}}
                onPress={onPress}>
                <Text {...changeColorText}>{title}</Text>
             </TouchableOpacity>
        </View>
      
    )
}

const styles = StyleSheet.create({
    btnActive: {
        flex: 1, 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 2, 
        borderBottomColor: '#D88CF2'
    },
    btnOff: {
        flex: 1, 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#ccc'
    },
    textActive: {
        color: '#C4E', 
        textAlign: 'center'
    },
    textOff: {
        color: '#777',
        textAlign: 'center'
    }
});
