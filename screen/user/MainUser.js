import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class MainUser extends Component {
   static navigationOptions = {
    title: 'List User',
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

  constructor(props){
    super(props);
    this.state={
      data:""
    }
  }

  

  GenerateListView=(item)=>{
   
    var genderStr=''
    if(item.gender=='M'){
        genderStr='Male'
    }else{
        genderStr='Female'
    }
      return(
          <View style={styles.styleFlatList}>
            
            <Text>UserName:{item.userName}</Text>
            <Text>FullName:{item.fullName}</Text>
            <Text>Gender:{genderStr}</Text>
          </View>
      );
   
  }

  componentDidMount() {
   let data= [{id:1,userName:'bac.nt',fullName:'nguyễn thanh bắc',gender:'M'},
  {id:2,userName:'hoang.vu', fullName:'Vũ hoàng', gender:'M'},
  {id:3,userName:'lan.tt', fullName:'Trần Thanh Lan', gender:'F'}
    ]
  this.setState({
    data:data
  })
    
  }
    render(){
      const {navigate} = this.props.navigation;
      return (
          <View style={styles.container}>
          <Button
              icon={
                <Icon
              name="plus"
              size={15}
              color="white"           
              />
              }
              type="solid"
              onPress={() => navigate('addUser')}
             
             title=" Add user"
        />
           <FlatList
              data={this.state.data}
              renderItem={({item}) =>this.GenerateListView(item) }
              keyExtractor={(item, index) => item.id.toString()}
           />

          </View>
        );
    }
    
  }
  
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
    }
  });
  