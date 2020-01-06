import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import { Container, Header, Icon, Input, Left, Body, Title, Right, Button, Text, Content, H1 } from 'native-base';




export default class Navbar extends Component {
    render() {
        return (
            <View>

                {/* header */}
                <Header style={style.header}>
                   
                    <Body>

                        <Title>Dumb-Tick</Title>
                    </Body>
                    <Right>
                        <Button hasText style={style.buttonNav}>
                            <Text style={style.log}>Log-In</Text>
                        </Button>
                        <Button hasText style={style.buttonNav}>
                            <Text style={style.log}>Register</Text>
                        </Button>
                    </Right>

                </Header>

                {/* header */}

            </View>
        );
    }
}


const style = StyleSheet.create({
    header: {
        backgroundColor: '#ffb6b9'
    },
    log: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#fff',
        fontWeight: 'bold',
        fontSize: 12
    },
    row: {
        flexDirection: 'row',
        marginTop: 20
    },
    rowItem: {
        margin: 3

    },
    rowList: {
        textAlign: 'justify'
    },
    buttonNav: {
        backgroundColor: '#ffb6b9',
        borderColor: '#ee5555'
    },
    container: {
        backgroundColor: '#F4E1E1'
    },
    contentPadding: {
        padding: 16
    },
    title: {
        fontWeight: 'bold',
        color: '#ee5555'
    },
    search: {
        backgroundColor: '#ee5555',
        maxHeight: 60
    },
    searchBar: {
        color: 'white',
        borderColor: 'red'
    }


})
