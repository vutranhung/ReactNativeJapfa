import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {connect, Provider} from 'react-redux'


 let genders = [
       {label: 'Male', value: 0 },
      {label: 'Female', value: 1 }
    ];

 class AddEditUser extends Component {
  
  static navigationOptions = {
    title: 'Add/Edit Note',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#ADD8E6',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      //Sets Header text style
    },
  };

   state={
     username:"",
     password:"",
     fullname:'',
     gender:''
   }

   handleUserName = (text) => {
      this.setState({ username: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
    handleFullName = (text) => {
      this.setState({ fullname: text })
   }
   handleGender = (value) => {
      this.setState({ gender: value })
   }

  
componentDidMount() {
     if (this.props.navigation.state.params != null && this.props.navigation.state.params.userEdit != null) {
            console.log("show data " + JSON.stringify(this.props.navigation.state.params.userEdit))
     user = this.props.navigation.state.params.userEdit
     this.setState({
        username: user.Username,
        password: user.Password,
        fullname: user.Fullname,
        gender:user.gender
     })
   }
}

gotoBack = () => {
  
  Alert.alert(
  'Thông báo',
  'Bạn có chắc chắn muốn quay lại',
  [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => this.props.navigation.goBack()},
  ],
  
);
}

    render(){
      return (
          <View style={styles.container}>
              <Text>User name</Text>
               <TextInput
                value={this.state.username}
                //onChangeText={username => this.setState({ username })}
                onChangeText={this.handleUserName}
                placeholder={'Username'}
                style={styles.input}
              />
              <Text>Password</Text>
               <TextInput
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={this.handlePassword}
                placeholder={'Password'}
                style={styles.input}
              />
              <Text>Full name</Text>
               <TextInput
                value={this.state.fullname}
               // onChangeText={username => this.setState({ username })}
                onChangeText={this.handleFullName}
                placeholder={'Fullname'}
                style={styles.input}
              />
              <Text>Gender</Text>
               <RadioForm
               radio_props={genders}
               initial={0}
               labelStyle={{ marginRight: 10 }}
               formHorizontal={true}
               //onPress={(value) => {this.setState({gender:value})}}
               onPress={(value) =>{this.handleGender}}
               />

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () =>{
                      if (this.props.navigation.state.params != null && this.props.navigation.state.params.userEdit != null) {
                 // modify
                   this.props.edit(this.state)
               } else {
                // add
                      Alert.alert(
                          'Thông báo',
                          'Bạn có chắc chắn muốn quay lại',
                          [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {text: 'OK', onPress: () =>this.props.add(this.state.username,this.state.password,this.state.descNote)},
                          ],
  
                    );
                    //this.props.add(this.state.idNote,this.state.titleNote,this.state.descNote)
                   // this.props.navigation.goBack()
               }
              }  
               }>
              
              <View style={styles.button}>
               <Text style = {styles.submitButtonText}> Save </Text>
               </View>
            </TouchableOpacity>

             <TouchableOpacity
               style = {styles.submitButtonBack}
                onPress={() => this.gotoBack()}
                >
                 <View style={styles.button}>
               <Text style = {styles.submitButtonText}> Cancel </Text>
               </View>
            </TouchableOpacity>
          </View>
        );
    }
    
  }


const GetDataFromStore=(state)=>
{
   props={...state}
    return props
}

const PutDataChangeToStore=dispatch=>{
  return {
    add:(username,fullname,password,gender)=>{
      dispatch({type:"AddUser",itemUser:{
          id:0,
          username:username,
          fullname:fullname,
          password:password,
          gender:gender
      }})
    },
    edit:(state)=>{
      dispatch({type:"EditUser",payload:state})
    },
    
  }

  
}


const AddEditUserConnected= connect(
  GetDataFromStore,
  PutDataChangeToStore
)(AddEditUser)

export {AddEditUserConnected}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'gray',
      marginTop:30,
      marginLeft:30
      // alignItems: 'center',
      // justifyContent: 'center',
    },

   input: {
    // width: 250,
    height: 44,
    padding: 10,
    marginBottom: 10,
    //backgroundColor: '#ecf0f1',
  },

    submitButton: {
     backgroundColor: '#2196F3',
      // padding: 10,
       margin: 10,
      height: 40,
      
   },
   submitButtonText:{
      color: 'white', 
      textAlign: 'center',
       padding: 5,   
       fontSize: 20
   },
   submitButtonBack:{
      backgroundColor: '#ADD8E6',
      // padding: 10,
       margin: 10,
       height: 40,
    
   },

    button: {
     
    alignItems: 'center',
   
  },


  });