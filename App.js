import React, { Component } from 'react';
import { StyleSheet,ScrollView, View, Image } from 'react-native'
import { Container,Icon,Card,Footer,FooterTab, CardItem, Input, Left, Body, Title, Button, Text, Content, H1 } from 'native-base';
import { classes } from 'istanbul-lib-coverage';


import Nav from './android/app/src/screens/nav/navbar'
export default class App extends Component {
  render() {
    const category =
  [
      {
        id : 1,
        name : "Sport"
      },
      {
        id : 2,
        name : "Music"
      }
  ]
    return (
      <Container style={style.container}>

        {/* header */}
        <Nav />
        
        {/* header */}
        <Content style={style.contentPadding}>      
          <H1 style={style.title}>Categories</H1>
      
          <ScrollView horizontal={true}>
  <Button style={{backgroundColor:'#bbded6'}} primary>
    <Text >Sport</Text>
  </Button>
  <Button style={{backgroundColor:'#bbded6'}} primary>
    <Text >Sport</Text>
  </Button>
  <Button style={{backgroundColor:'#bbded6'}} primary>
    <Text >Sport</Text>
  </Button>
  <Button style={{backgroundColor:'#bbded6'}} primary>
    <Text >Sport</Text>
  </Button>
  <Button style={{backgroundColor:'#bbded6'}} primary>
    <Text >Sport</Text>
  </Button>
</ScrollView>

          <H1 style={style.title}>Today</H1>
          <Card>
                <Body>
                  <Text>sadsda</Text>
                  <Image
                    source={{ uri: 'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20191202125057.JPG' }}
                    style={style.image}
                  />
                </Body>
                <CardItem footer>
                  <View style={style.rowItem}>
                    <View style={style.flexItem}>
                      <H1 style={{fontWeight:'bold'}}>Raisa Concert 2020</H1>
                    </View>
                    <View>
                      <Text>
                        <Icon name='heart'/>
                      </Text>
                    </View>
                  </View>
                </CardItem>
                <CardItem>
                    <Text style={{color:'#272343'}}>21 Desember 2020</Text>
                </CardItem>
                <CardItem>
                  <Text style={{color:'#999'}}>
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
                      <Text>Raisa Concert</Text>
                    </View>
                    <View>
                      <Text>TE</Text>
                    </View>
                  </View>
                </CardItem>
                <CardItem>
                    <Text>21 Desember 2020</Text>
                </CardItem>
                <CardItem>
                  <Text>
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
                      <Text>Raisa Concert</Text>
                    </View>
                    <View>
                      <Text>TE</Text>
                    </View>
                  </View>
                </CardItem>
                <CardItem>
                    <Text>21 Desember 2020</Text>
                </CardItem>
                <CardItem>
                  <Text>
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
    backgroundColor: '#272343'
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
    padding:44

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
  home:{
    backgroundColor:'#fff',
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
