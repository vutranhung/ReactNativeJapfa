import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import NavigationDrawerStructure from '../NavigationDrawerStructure'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MainUnit extends Component {

  // navigationOptions= ({ navigation }) => ({
  //   title: 'List Unit',
  //   headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
  //   headerStyle: {
  //     backgroundColor: '#ADD8E6',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //         fontWeight: 'bold',
  //          //Sets Header text style
  //      },
  // })

  constructor(props){
    super(props);
    this.state={
      data:""
    }
  }

  GenerateListView=(item)=>{
   
      return(
          <View style={styles.styleFlatList}>           
            <Text>Unit no:{item.UNIT_NO}</Text>
            <Text>Unit name:{item.UNIT_NAME}</Text>
            <Text>Description:{item.UNIT_DESCRIPTION}</Text>
          </View>
      );
   
  }

  componentDidMount() {

      fetch('http://10.0.2.2:50555/api/Unit/GetAllUnit',{
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
         
    }) 

    .catch((error) =>{
      console.error(error);
    });
   

    
  }


  //  static navigationOptions = {
  //   title: 'List Unit',
  //   //Sets Header text of Status Bar
  //   headerStyle: {
  //     backgroundColor: '##ADD8E6',
  //     //Sets Header color
  //   },
  //   headerTintColor: '#ffffff',
  //   headerLeft: <NavigationDrawerStructure />,
  //   //Sets Header text color
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //     //Sets Header text style
  //   },
  // };
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
              onPress={() => navigate('addEditUnit')}
             //todo check edit or add
             title=" Add unit"
        />
           <FlatList
              data={this.state.data}
              renderItem={({item}) =>this.GenerateListView(item) }
              keyExtractor={(item, index) => item.ID.toString()}
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
  