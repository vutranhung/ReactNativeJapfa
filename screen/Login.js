import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button  } from 'react-native-elements';


export default class Login extends Component{
   render(){
     return(
       <View style={styles.container}>       
       <Image source={require('../assets/logo.png')} />  
       <Text style={styles.styleTextLess}>Phần mềm React Native</Text>  
       <Input inputContainerStyle={styles.styleInputContainer} inputStyle={styles.styleInput} placeholderTextColor={'#fffbfb'} placeholder='Tên đăng nhập'/>
       <Input inputContainerStyle={styles.styleInputContainer}  inputStyle={styles.styleInput} placeholderTextColor={'#fffbfb'} placeholder='Mật khẩu' />     
       <Button buttonStyle={styles.styleButton}  type='outline' title='Đăng nhập'  />
       <Text style={styles.whiteText}>Quên mật khẩu</Text>
       <View style={styles.containerrow}>
          <Text style={styles.bottomText}>Chưa có tài khoản, </Text>
          <Text style={styles.whiteText}>Đăng ký ngay</Text>
       </View>
       </View>
      
     )
   }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#00BDC4',
    alignItems: 'center',
    justifyContent: 'center',
  },  
   containerrow: {    
    flexDirection:'row',    
     position: 'absolute',
      bottom: 30,
      //color:'#f87979', 
  },  
  
  styleTextLess:{
    color:'#f87979',
    marginBottom:50
  },


  bottomText:{     
      color:'#f87979',         

  },
   whiteText:{
    color: '#fffbfb',   
  },
  styleInput:{
      backgroundColor:'#f9877b',
     // color:'#f87979',
      borderRadius: 30,     
       //borderWidth: 0,
       textAlign: 'center',
       height:50,
       borderBottomWidth: 0 
  },

  styleInputContainer:{
      width: '80%',
      marginTop:30,
      borderBottomWidth: 0
  },
  styleButton:{
    backgroundColor:'#ffffff',   
     borderRadius: 30,
     width:'80%',
     marginTop:50,
     height:50

  },
    
});