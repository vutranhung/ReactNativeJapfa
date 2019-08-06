import React,{Component} from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'
import { DrawerItems, DrawerNavigation } from 'react-navigation'
import {Container, Content, Header, Body } from 'native-base';
import { Avatar } from 'react-native-elements';

const DrawerHead = (props) => (
  <Container>
  <Header style={styles.drawerHeader}>
  <Body>
  <Avatar
  size="medium"
  rounded
  source={require('../assets/logo.png')}
  // source={{
  //   uri:
  //     'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  // }}
/>

  {/* <Image
  style={styles.drawerImage}
  source={require('../assets/logo.png')}/> */}
  <Text>japfa comfeed company</Text>
  </Body>
  </Header>
  <Content>
  <DrawerItems {...props}/>
  </Content>
  </Container>
)


export default DrawerHead

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ADD8E6',       
  },
  drawerImage: {
    height: 120,
    width: '100%'
  }, 
   drawerHeader: {
  	height: 120, 
    width: '100%',
  	backgroundColor: '#ADD8E6'
  },
});


