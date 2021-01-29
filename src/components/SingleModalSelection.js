import React, { useState } from 'react'
import { FlatList, Modal, Text, TouchableOpacity } from 'react-native'
import FlatBtn from './FlatBtn'



export default function SingleModalSelection(props) {
    const [modal, setModal] = useState('false')
    const [icon, setIcon] = useState(props.icon)
    const onSelect = (item) => {
        setIcon(item.icon)
        close();
        console.log(item)
    }

    const close = _ => setModal(false);

    return (
        <>
            <FlatBtn square onPress={_ => setModal(true)} label={props.label} icon={icon} />
            <Modal
                animationType="fade"
                transparent={true}
                visible={modal}
                onRequestClose={close}
            >
                <TouchableOpacity
                    style={[{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignItems: 'center' }]}
                    onPress={close}
                >
                    <Text style={{ width: '100%', backgroundColor: '#ccc', fontSize: 32, textAlign: 'center', padding: 20 }}>{props.title}</Text>
                    <FlatList
                        data={props.arr}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        renderItem={({ item }) => <FlatBtn onPress={_ =>onSelect(item)} square style={{ margin: 20, width: 150, height: 150 }} icon={item.icon} label={item.text} />}
                    />
                </TouchableOpacity>
            </Modal>
        </>
    )
}
