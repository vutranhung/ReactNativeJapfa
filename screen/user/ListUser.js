import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import  NavigationDrawerStructure from '../NavigationDrawerStructure'
import {connect, Provider} from 'react-redux'
export  class ListUser extends Component {

static navigationOptions= ({ navigation }) => ({
    title: 'List user',
   // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#ADD8E6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
          fontWeight: 'bold',
           //Sets Header text style
       },
  })

constructor(props){
    super(props);
    this.state={
      data:""
    }
  }

GenerateListView=(item)=>{   
    var genderStr=''
    if(item.GENDER=='M'){
        genderStr='Male'
    }else{
        genderStr='Female'
    }
      return(
          <View style={styles.styleFlatList}>
            
            <Text>UserName:{item.USERNAME}</Text>
            <Text>FullName:{item.FULLNAME}</Text>
            <Text>Gender:{genderStr}</Text>
          </View>
      );
   
  }

  componentDidMount() {
    
    fetch('http://10.0.2.2:50555/api/User/GetAllUser',{
      method:'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
      .then((responseJson) => {   
      let temp=JSON.stringify(responseJson)
       this.setState({data:JSON.parse(temp)})
           this.props.initial(JSON.parse(temp))
         
    }) 

    .catch((error) =>{
      console.error(error);
    });
      
  }

  render(){
      const {navigate} = this.props.navigation;
      return (
          <View style={styles.container}>
          {/* <Button  containerStyle={styles.TouchableOpacityStyle}
              icon={
                <Icon
              name="plus"
              size={15}
              color="white"           
              />
              }
              type="solid"
              onPress={() => navigate('addEditUser')}
             //check edit hoac add
             title=" Add"
        /> */}

           <FlatList
              data={this.state.data}
              renderItem={({item}) =>this.GenerateListView(item) }
              keyExtractor={(item, index) => item.ID.toString()}
           />

          <TouchableOpacity onPress={() => navigate('addEditUser')} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>

          </View>
        );
    }
    
  }

const GetDataFromStore=(state)=>{
  props={...state}
  return props
}

const PutDataChangeToStore=(dispatch)=>{
     return {
    delete:(idUser)=>{
      dispatch({type:"DeleteUser",itemUser:{
          idUser:idUser          
      }})
    },
    // edit:()=>{
    //   dispatch({type:"EditUser",payload:1})
    // },
    initial:(data)=>{
      dispatch({type:"Initial",payload:data})
    }
  }
}

const ListUserConnected= connect(
  GetDataFromStore,
  PutDataChangeToStore
)(ListUser)

export {ListUserConnected}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    styleFlatList:{
      paddingLeft:20,
      //paddingTop: 5,
      backgroundColor: 'skyblue',
      marginTop: 5,
    },
    TouchableOpacityStyle: {
    position: 'absolute',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  fab: { 
    position: 'absolute', 
    width: 50, 
    height: 50, 
    alignItems: 'center', 
    justifyContent: 'center', 
    right: 15, 
    bottom: 15, 
    backgroundColor: '#03A9F4', 
    borderRadius: 30, 
    elevation: 8 
    }, 
    fabIcon: { 
      fontSize: 30, 
      color: 'white' 
    }

  });
