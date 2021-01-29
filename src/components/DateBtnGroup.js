import React, { useState } from 'react';
import { Platform } from 'react-native';
import FlatBtn from './FlatBtn'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateBtnGroup({ dt = new Date }) {
    const [date, setDate] = useState(dt);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (e, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(date)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    return (
        <>
            <FlatBtn
                clear
                label={`${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`}
                icon='&#x1F4C6;'
                onPress={() => showMode('date')}
            />
            <FlatBtn
                clear
                label={`${('0' + date.getHours()).slice(-2)}:${('0' + (date.getMinutes() + 1)).slice(-2)}`}
                icon='&#x231A;'
                onPress={() => showMode('time')}
            />
            { show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </>
    )
}
