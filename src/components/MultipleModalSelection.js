import React, { Component } from 'react'
import { FlatList, Modal, Text, TouchableOpacity } from 'react-native'
import FlatBtn from './FlatBtn'

export default class MultipleModalSelection extends Component {

    state = {
        modal: false,
        actives: [],
    }

    onSelect = ({ id }) => {
        const actives = this.state.actives
        if (actives.includes(id)) actives.splice(actives.indexOf(id), 1)
        else actives.push(id)
        this.setState({ actives })
    }

    onConfirm = () => {
        this.props.onPress(this.props.arr.filter(i=>this.state.actives.includes(i.id)))
        this.close()
    }

    close = _ => this.setState({ modal: false });


    render() {
        return (
            <>
                <FlatBtn square onPress={_ => this.setState({ modal: true })} label={this.props.label} icon={this.props.icon} />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modal}
                    onRequestClose={this.close}
                >
                    <TouchableOpacity
                        style={[{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignItems: 'center' }]}
                        onPress={this.close}
                    >
                        <Text style={{ width: '100%', backgroundColor: '#ccc', fontSize: 32, textAlign: 'center', padding: 20 }}>{this.props.title}</Text>
                        <FlatList
                            data={this.props.arr}
                            keyExtractor={item => item.id}
                            numColumns={3}
                            renderItem={({ item }) => <FlatBtn onPress={_ => this.onSelect(item)} square style={[{ margin: 10, backgroundColor: this.state.actives.includes(item.id) ? '#C4E' : '#ccc' }]} icon={item.icon || this.props.icon} label={item.text} />}
                        />
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                right: 20,
                                bottom: 20,
                                backgroundColor: '#C4E',
                                borderRadius: 25,
                                height: 50,
                                width: 50,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={this.onConfirm}
                        >
                            <Text style={{ color: 'white', fontSize: 24 }}>&#x2713;</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
            </>
        )
    }
}