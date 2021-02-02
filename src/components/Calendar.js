import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const months = ["Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro",
    "Novembro", "Dezembro"]

const weekDays = [
    "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
]

// Dias dos meses
const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export default class Calendar extends Component {

    state = {
        activeDate: new Date(),
    }

    generateMatrix() {
        let matrix = []

        // Dias da semana (Cabeçario)
        matrix[0] = weekDays

        const year = this.state.activeDate.getFullYear()
        const month = this.state.activeDate.getMonth()

        const firstDay = new Date(year, month, 1).getDay()

        let maxDays = nDays[month];
        if (month == 1)
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
                maxDays += 1;

        let counter = 1;
        for (let row = 1; row < 7; row++) {
            matrix[row] = [];
            for (let col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row == 1 && col >= firstDay) {
                    // Primeiro dia do mês
                    matrix[row][col] = counter++;
                } else if (row > 1 && counter <= maxDays) {
                    matrix[row][col] = counter++;
                }
            }
        }

        return matrix;
    }

    changeMonth = (n) => {
        this.setState(() => {
            this.state.activeDate.setMonth(
                this.state.activeDate.getMonth() + n
            )
            return this.state;
        });
    }

    calendar() {
        const matrix = this.generateMatrix();
        const rows = matrix.map((row, rowIndex) => {
            const rowItems = row.map((item, colIndex) => {
                return (
                    <TouchableOpacity onPress={_ => this.props.onPress(new Date(`${this.state.activeDate.getMonth() + 1}/${item}/${this.state.activeDate.getFullYear()}`))}
                        key={colIndex}
                        style={[{
                            height: 28,
                            width: 28,
                            justifyContent: 'center',
                            alignItems: 'center'
                        },
                        // Cabeçário
                        rowIndex == 0 ? { height: 20, flex: 1, backgroundColor: '#ccc' } : {},
                        //DIA ATUAL
                        this.state.activeDate.getDate() == item
                            && this.state.activeDate.getMonth() == new Date().getMonth() ? {
                                borderWidth: 1,
                                borderRadius: 25,
                                borderColor: '#C4E'
                            } : {}]}
                    >
                        <Text>
                            {item != -1 ? item : ''}
                        </Text>
                    </TouchableOpacity>
                )
            })
            return (
                <View
                    key={rowIndex}
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        padding: 15,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    { rowItems}
                </View >
            )
        })

        return rows
    }

    render() {
        return (
            <View style={{ margin: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={_ => this.changeMonth(-1)}>
                        <Text style={{ fontSize: 30 }}>&#x276E;</Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                            textAlign: 'center',
                        }}
                    >
                        {months[this.state.activeDate.getMonth()]} &nbsp;
                    {this.state.activeDate.getFullYear()}
                    </Text>
                    <TouchableOpacity onPress={_ => this.changeMonth(+1)}>
                        <Text style={{ fontSize: 30 }}>&#x276F;</Text>
                    </TouchableOpacity>
                </View>
                {this.calendar()}
            </View>
        )
    }
}