import React, { useState } from 'react'
import { FlatList, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DateBtnGroup from '../components/DateBtnGroup'
import EntryHead from '../components/EntryHead'
import FlatBtn from '../components/FlatBtn'
import RadioBtnGroup from '../components/RadioBtnGroup'
import SingleModalSelection from '../components/SingleModalSelection'
import wheres from '../data/wheres'
import whos from '../data/whos'
import feeling from '../data/feeling'
import substances from '../data/substances'
import MutipleModalSelection from '../components/MultipleModalSelection'
import QtdSelector from '../components/QtdSelector'


export default function EntryScreen({ navigation, route }) {

    const [more, setMore] = useState(false)
    const [drugs, setDrugs] = useState([])
    const [comments, setComments] = useState('')

    const page = route.params?.page || 0;
    const date = route.params?.date || new Date;

    const proceed = _ => {
        if (page < 2) navigation.push('NewEntry', { page: page + 1 })
        else navigation.popToTop()
    }

    const showMore = show => {
        if (show) {
            return (
                <View style={{ marginHorizontal: 20, marginTop: 28 }}>
                    <KeyboardAvoidingView>
                        <Text style={{ fontSize: 16 }}>Algum comentário? (Opcional)</Text>
                        <TextInput
                            value={comments}
                            onChange={text => setComments(text.nativeEvent.text)}
                            style={{ borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 14 }}
                            placeholder='Insira um comentário aqui' />
                    </KeyboardAvoidingView>
                    <Text style={{ fontSize: 16, marginTop: 24 }}>Onde você está? (Opcional)</Text>
                    <RadioBtnGroup data={wheres} onChange={console.log} />
                    <Text style={{ fontSize: 16, marginTop: 24 }}>Com quem você está? (Opcional)</Text>
                    <RadioBtnGroup data={whos} onChange={console.log} />
                </View>
            )
        } else {
            return (
                <TouchableOpacity style={{ padding: 20, backgroundColor: '#ccc' }} onPress={_ => setMore(true)}>
                    <Text style={{ textAlign: 'center', fontSize: 18, color: '#C4E' }}>+ Quero adicionar mais detalhes</Text>
                </TouchableOpacity>
            )
        }
    }

    const showPage = page => {
        if (page == 0 || page == 2) {
            return (
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ marginTop: 28, fontSize: 16 }}>Data e Horário de {page == 0 ? 'inicio' : 'termino'}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <DateBtnGroup dt={date} />
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ marginTop: 28, fontSize: 16 }}>O que você está usando?</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <MutipleModalSelection onPress={setDrugs} arr={substances} title='O que você está usando?' label='Selecione as substâncias' icon='capsules' />
                        <FlatList
                            data={drugs}
                            horizontal
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <View style={{ marginHorizontal: 5 }}>
                                    <FlatBtn square label={item.text} icon='capsules' />
                                    <QtdSelector label='Selecione uma quantidade' item={item} />
                                </View>
                            )}
                        />
                    </View>
                </View>
            )
        }

    }

    return (
        <>
            <EntryHead value={page} />
            <ScrollView>
                {showPage(page)}
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ marginTop: 28, fontSize: 16 }}>Como você está/estava se sentindo?</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text>Fisicamente</Text>
                            <SingleModalSelection label='Selecione um estado' icon='meh-blank' title='Como você se sente Fisicamente?' arr={feeling} />
                        </View>
                        <View style={{ marginHorizontal: 80 }}>
                            <Text>Emocionalmente</Text>
                            <SingleModalSelection square label='Selecione um estado' icon='meh-blank' title='Como você se sente Emocionalmente?' arr={feeling} />
                        </View>
                    </View>
                </View>
                {showMore(more)}
            </ScrollView>
            <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                <FlatBtn clear label='Continuar Depois' onPress={_ => navigation.popToTop()} />
                <FlatBtn label='Prosseguir' icon='arrow-right' onPress={proceed} />
            </View>
        </>
    )
}