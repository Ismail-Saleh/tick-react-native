import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import { Container, Icon, Card, Footer, FooterTab, CardItem,Header, Left,Right, Body, Title, Button, Text, Content, H1 } from 'native-base';
import { Avatar } from 'react-native-elements';
import axios from 'axios'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        category: [],
        event: [] 
      };

}
handlePress=()=>{
    this.props.navigation.navigate('EventDetail');
}
CategoryPress=()=>{
    this.props.navigation.navigate('CategoryPage');

}
 componentDidMount() {
   axios.get('http://192.168.1.22:5000/api/v1/categories')
      .then(response => this.setState({ category: response.data })
      );
  console.log(this.state.category)
 axios.get('http://192.168.1.22:5000/api/v1/event')
      .then(response => this.setState({ event: response.data })
      );
      console.log(this.state.event)
}

  render() {
    
    const { category } = this.state
        const { event} = this.state
        console.log(category)

    return (
        <Container style={style.container}>

        {/* header */}
        {/* <Nav /> */}
        <Header style={style.header}>
                   
                    <Body>

                        <Title>Dumb-Tick</Title>
                    </Body>
                    <Right>
                        <Button hasText style={{backgroundColor:'#ffb6b9'}}>
                            <Text style={style.log}>Log-In</Text>
                        </Button>
                        <Button hasText style={{backgroundColor:'#ffb6b9'}}>
                            <Text style={style.log}>Register</Text>
                        </Button>
                    </Right>

                </Header>


        {/* header */}
        <Content style={style.contentPadding}>
          <H1 style={style.title}>Categories</H1>

          <ScrollView horizontal={true}>
            {category.map(item=>

            <Button onPress={this.CategoryPress} style={{ backgroundColor: '#ffb6b9' }} primary>
              <Text >{item.name}</Text>
            </Button>
            )}
           
          </ScrollView>

          <H1 style={style.title}>Today</H1>


          {event.map(item=>
          <Card>
            <View style={style.rowItem}>
              <View style={{ padding: 9 }}>
                <Avatar
                  size='medium'
                  rounded
                  source=
                  {{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  }}
                />
              </View>
              <View>
                <Text style={style.avatar}>Jenifer Lee</Text>
                <Text style={style.avatarP}>Bintaero, Jakrta </Text>
              </View>
            </View>


            <Body>

              <Image
                source={{ uri: item.image }}
                style={style.image}
              />
            </Body>
            <CardItem footer>
              <View style={style.rowItem}>
                <View style={style.flexItem}>
                  <H1 style={{ fontWeight: 'bold' }} onPress={this.handlePress}>{item.title}</H1>
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
                Utama Gelora Bung Karno pada 27 Juni 2020 yang bertajuk Raisa Live
                in Concert Stadion Utama Gelora Bung Karno. Konser ini akan menja
                di saksi nyata tentang cerita perjalanan, perjuangan, dan harapann
                ya di industri musik, serta memberikan pesan kuat bahwa setiap or
                ang, terutama generasi muda khususnya perempuan, bisa bermimpi da
                n menggapai impiannya dan bahkan menciptakan sejarah
                  </Text>
            </CardItem>
          </Card>
          )}
          

        </Content>
        <Footer>
          <FooterTab style={style.home}>

            <Button>
              <Icon name="home" />
            </Button>


          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


const style = StyleSheet.create({
    header: {
        backgroundColor: '#ffb6b9'
    },
    buttonNav: {
        backgroundColor: '#ffb6b9',
        borderColor: '#ee5555'
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
    backgroundColor: '#fff'
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
