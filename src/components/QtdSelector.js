import React, { useState } from 'react'
import { Button, Picker, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { Picker } from '@react-native-picker/picker';

export default function QtdSelector({ label, item }) {

    const [modal, setModal] = useState(false)
    const [text, setText] = useState(label)
    const [qtd, setQtd] = useState('')
    const [format, setFormat] = useState(item.opt[0])

    const close = _ => setModal(false);

    return (
        <>
            <Text
                style={{ width: 100, textAlign: 'center', borderWidth: 1, marginTop: 5, padding: 2 }}
                onPress={_ => setModal(true)}>
                {text}
            </Text>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modal}
                onRequestClose={close}
            >
                <>
                    <TouchableOpacity
                        style={[{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center' }]}
                        onPress={close}
                    />
                    <View style={{ backgroundColor: '#fff', height: 220 }}>
                        <Text
                            style={{ padding: 20, fontSize: 24, backgroundColor: '#ccc', width: '100%', textAlign: 'center', textAlignVertical: 'center' }}>
                            Digite a quantidade ingerida
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TextInput
                                value={qtd}
                                onChange = {text => setQtd(text.nativeEvent.text)}
                                textAlign='right'
                                style={{ borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 14, margin: 5 }}
                                placeholder='Insira a quantidade'
                                keyboardType='numeric' />
                            <Picker
                                selectedValue={format}
                                style={{ width: 150, paddingVertical: 12, margin: 5 }}
                                onValueChange={itemValue =>
                                    setFormat(itemValue)
                                }>
                                {item.opt.map(i => <Picker.Item key={i} label={i} value={i} />)}
                            </Picker>
                        </View>
                        <View style={{ width: 100, marginVertical: 20, alignSelf: 'center' }}>
                            <Button onPress={_ => { setText(`${qtd} ${format}${qtd>1?'s':''}`); close() }} title='Confirmar' />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center' }]}
                        onPress={close}
                    />
                </>
            </Modal>
        </>
    )
}
