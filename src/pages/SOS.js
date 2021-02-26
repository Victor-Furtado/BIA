import React, { useState } from 'react'
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, SectionList } from 'react-native'
import Header from '../components/Header';
import BtnSOS from '../components/BtnSOS';
import telefones from '../data/telefonesSOS'

export default function SOS() {

    const [borderBottomOn, setBorderBottomOn] = useState(4);

    const borderBottom = {
        style: borderBottomOn === telefones.length ? styles.borderBottomActive : styles.borderBottomOff
    } 

    const [page, setPage] = useState('Telefones');

    const showPage = page => {

        if (page == 'Telefones') {
            return (
                <View style={{ flex: 1, margin: 0, backgroundColor:'#FFF' }}>

                    <View style={{ flex: 1, marginTop: 40, marginLeft: 30, marginRight:30,  flexDirection:'column', backgroundColor:'#fff' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', lineHeight: 18 }}>Telefones de emergência</Text>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 12 }}>Precisando de ajuda? Ligue para um dos números abaixo ou algum dos Postos de atendimento.</Text>
                        </View>
                    </View>

                    <View style={{ flex:5, margin: 0, marginTop:0, backgroundColor:'#fff' }}>
                       { /* Telefones de emergência */ }

                       <ScrollView style={{ borderTopWidth: 1, borderTopColor: '#eee' }}>

                            {
                                telefones.map(item => (

                                    <View key={item.key}>

                                        <View style={{
                                            flex:1, 
                                            flexDirection: 'row',
                                            backgroundColor:'#fff',
                                            borderBottomWidth: 1, 
                                            borderBottomColor: '#eee'
                                        }} >

                                            <View style={{ flex: 6 }} >
                                                <Text style={{ marginLeft: 30, marginTop: 15, marginBottom: 10, fontSize: 16 }}>{item.name}</Text>
                                                <Text style={{ marginLeft: 30, marginBottom:15 }}>{item.phone}</Text>
                                            </View>

                                            <View style={{ flex: 1, justifyContent:'center' }} >
                                                <TouchableOpacity 
                                                    style={{ 
                                                        width: 40, 
                                                        height: 40, 
                                                        alignItems:'center', 
                                                        justifyContent:'center', 
                                                        backgroundColor: '#ccc', 
                                                        borderRadius: 20 
                                                    }} >
                                                    <Image source={require('../images/phone.png')} style={{ width:20, height:20 }} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            }

                       </ScrollView>
       
                    </View>

                </View>
            )
        } else if (page == 'Bad Trip') {
            return (
                <View style={{ flex: 1, margin: 0, backgroundColor:'#FFF' }}>

                    <View 
                        style={{ 
                            flex: 1, 
                            marginTop: 70, 
                            marginLeft: 30, 
                            marginRight:30, 
                            flexDirection:'column', 
                            backgroundColor:'#fff' 
                        }}>
                        
                        <Text style={{ fontSize: 15, fontWeight: 'bold', lineHeight: 18 }}>Não está se sentindo muito bem?</Text>

                        <Text style={{ marginTop: 10 }}>Confira alguns exercícios de respiração que separamos para você.</Text>

                        <TouchableOpacity 
                            style={{ 
                                marginTop: 20,
                                width: 224, 
                                height: 40,   
                                backgroundColor: '#D88CF2', 
                                borderRadius: 10 
                            }} >

                            <Text style={{ marginTop: 10, marginLeft:20, color: '#fff' }}>Ver exercícios</Text>

                        </TouchableOpacity>

                        
                    </View> 

                    <View style={{ marginBottom:50, backgroundColor: '#fff' }} >

                            <Image source={require('../images/bad_trip.png')} style={{ width:280, marginLeft: 120 }} />

                    </View>
 

                </View>
            )
        } else if (page == 'Postos de atendimento') {
            return (
                <View style={{flex:1,  marginTop: 0,  marginBottom: 10, backgroundColor:'#FFF' }}>

                    <View style={{  marginTop:0, marginBottom:20, width: '100%', backgroundColor: '#eee' }}>                  
                        <View style={{  margin: 20, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>

                            <Text 
                                    style={{ 
                                        flex: 1, 
                                        textAlign: 'center', 
                                        textAlignVertical: 'center', 
                                        marginTop:10,
                                        marginBottom: 10
                                    }}>Visualizar</Text>

                            <TouchableOpacity
                                    style={{
                                        flex:2, 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#fff', 
                                        borderRadius: 30,
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        borderRadius: 8
                                    }}>
                                        <Text 
                                            style={{ 
                                                fontWeight:'bold',  
                                                textAlign: 'center', 
                                                textAlignVertical: 'center' ,
                                                color: '#C4E'
                                            }}>Toda Fortaleza</Text>
                            </TouchableOpacity>

                        </View>

                        
                    </View>


                    <View style= {{ margin: 20, marginBottom: 0, marginTop: 0 }}>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>

                    <View style={{ flex:1, margin: 0, backgroundColor:'#fff' }}>
                       { /* Telefones de emergência */ }

                        <SectionList 
                            style={{ marginTop:25 }}
                            sections={[
                                {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                                {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                            ]}

                            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                            keyExtractor={(item, index) => index}

                        />
                       
                    </View>
                    
                </View>
            )
        }

    }

    return (
        <>
            <Header text='SOS' />

            <View style={{flex:1, backgroundColor:'#FFF'}}>

                <View 
                    style={{ 
                            flexDirection: 'row', 
                            backgroundColor: '#FFF'}} >
                    <BtnSOS title='Telefones' onPress={_ => setPage('Telefones')} actualPage={page} />
                    <BtnSOS title='Bad Trip' onPress={_ => setPage('Bad Trip')} actualPage={page} />
                    <BtnSOS title='Postos de atendimento' onPress={_ => setPage('Postos de atendimento')} actualPage={page} />
                </View>
               
                {showPage(page)}

            </View>
                
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        marginLeft: 20,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fad',
        backgroundColor: '#fff',
      },
      item: {
        padding: 10,
        margin: 20,
        fontSize: 18,
        height: 44,
        borderTopWidth: 1,
        borderTopColor: '#eee',
      }
});