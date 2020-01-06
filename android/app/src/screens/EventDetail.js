import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import { Container, Icon, Card, Footer, FooterTab, CardItem, Input, Left, Body, Title, Button, Text, Content, H1 } from 'native-base';
import { classes } from 'istanbul-lib-coverage';
import { Avatar } from 'react-native-elements';
import 'react-native-gesture-handler';
import axios from 'axios'

import Nav from './nav/NavBack'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: [],
            // events: [] 
        };

    }
    componentDidMount() {
        axios.get('http://192.168.1.31:5000/api/v1/categories')
            .then(response => this.setState({ category: response.data })
            );
        // console.log(this.state.category)
        // await axios.get('192.168.1.31/api/v1/events')
        //     .then(response => this.setState({ events: response.data })
        //     );
    }

    render() {

        const { category } = this.state
        // const { events = [] } = this.state
        console.log(category)

        return (
            <Container style={style.container}>

                {/* header */}
                <Nav />

                {/* header */}
                <Card>

                    <CardItem>
                        <Body>
                            <Card>


                                <Body>

                                    <Image
                                        source={{ uri: 'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20191202125057.JPG' }}
                                        style={style.image}
                                    />
                                </Body>
                                <CardItem footer>
                                    <View style={style.rowItem}>
                                        <View style={style.flexItem}>
                                            <H1 style={{ fontWeight: 'bold' }}>Raisa Concert 2020</H1>
                                        </View>
                                        <View>
                                            <Text>
                                                <Icon name='heart' />
                                            </Text>
                                        </View>
                                    </View>
                                </CardItem>
                                <CardItem>
                                    <Text style={{ color: '#272343' }}>21 Desember 2020</Text>
                                </CardItem>
                                <CardItem>
                                    <Text style={{ color: '#999' }}>
                                        Raisa bersama JUNI Concert akan menggelar konser tunggal di Stadion
                                        Utama Gelora Bung Karno pada 27 Juni 2020
                                    </Text>
                                </CardItem>
                                <CardItem>
                                    <Image
                                        source={{ uri: 'https://images-platform.99static.com/gCTKnwy3gDt0JPvGAqvZD6dgW6I=/0x0:1001x1001/fit-in/900x675/99designs-contests-attachments/99/99712/attachment_99712306' }}
                                        style={style.imageIcon}
                                    />
                                    <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:20,flex:1}}>Ismail</Text>
                                </CardItem>
                                <CardItem>
                                    <View style={style.rowItem}>
                                        <View>
                                           
                                            <Icon name='ios-remove' />
                                            
                                        </View>
                                        <View style={{paddingRight:20}}>
                                            <Text>1</Text>
                                        </View>
                                        <View>
                                           
                                            <Icon name='ios-add' />
                                            
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>



                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Text>GeekyAnts</Text>
                    </CardItem>
                </Card>
            </Container>
        );
    }
}


const style = StyleSheet.create({
    header: {
        backgroundColor: '#272343'
    },
    avatar: {
        padding: 8,
        fontWeight: 'bold',
        color: '#444'
    },
    avatarP: {
        color: '#999',
        fontSize: 12,
        paddingLeft: 8
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
        margin: 3,
        padding: 44

    },
    rowList: {
        textAlign: 'justify'
    },
    buttonNav: {
        backgroundColor: '#ee5555',
        borderColor: '#ee5555'
    },

    container: {
        backgroundColor: '#fff',
        paddingBottom:100
    },
    contentPadding: {
        padding: 16
    },
    home: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#fff',
        fontWeight: 'bold',
    },
    title: {
        fontWeight: 'bold',
        color: '#ffb6b9',
        paddingTop: 20,
        paddingBottom: 20
    },
    image: {
        flex: 1,
        width: 321,
        height: 200,
    },
    imageIcon: {
        flex: 1,
        maxWidth:80,
        height: 80,
    },
    search: {
        backgroundColor: '#ee5555',
        maxHeight: 60
    },
    searchBar: {
        color: 'white',
        borderColor: 'red'
    },
    rowItem: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexItem: {
        flexGrow: 1
    }



})
