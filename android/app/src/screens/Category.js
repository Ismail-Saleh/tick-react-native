import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native'
import { Container,Button,Text, Content, H1} from 'native-base';
import Nav from './android/app/src/screens/nav/navbar'



export default class Category extends Component {
  render() {
    return (
      <Container tyle={style.contasiner}>
        <Nav/>
        <Content style={style.contentPadding}>
            <H1 style={style.title}>Categories</H1>
          
              <Button style={style.rowItem}  danger>
                  <Text style={style.rowList}>Sport</Text>
              </Button>
              <Button style={style.rowItem} danger>
                  <Text style={style.rowList}>Music</Text>
              </Button>
              <Button style={style.rowItem} danger>
                  <Text style={style.rowList}>Science</Text>
              </Button>
              <Button style={style.rowItem}  danger>
                  <Text style={style.rowList}>Movies</Text>
              </Button>
              <Button style={style.rowItem} danger>
                  <Text style={style.rowList}>Music</Text>
              </Button>
           
        </Content>


      </Container>
    );
  }
}
  

const style = StyleSheet.create({
 
  rowItem:{
    margin:3
  },
  container:{
    backgroundColor:'#F4E1E1'
  },
  contentPadding:{
      padding:16
  },
  title:{
    fontWeight:'bold',
    color:'#ee5555'
  },
  

  

})
