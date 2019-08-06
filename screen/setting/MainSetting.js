import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactNativeSettingsPage, { 
	SectionRow, SwitchRow,
	NavigateRow,SliderRow,
	CheckRow
} from 'react-native-settings-page';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class MainSetting extends Component {
  state = {
		check: false,
		switch: false,
		value: 40
	}
   static navigationOptions = {
    title: 'Setting',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#98e2fa',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
    render(){
      return (
          // <View style={styles.container}>
          //     <Text>Setting</Text>
          // </View>
          <ReactNativeSettingsPage>
				<SectionRow text='Usage'>
					<NavigateRow
						text='Navigate Row'
					iconName='check'
						onPressCallback={this._navigateToScreen} />
					<SwitchRow 
						text='Switch Row' 
						iconName='check'
						_value={this.state.switch}
						_onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />
					<CheckRow 
						text='Check Row'
					iconName='check'
						_color='#000'
						_value={this.state.check}
						_onValueChange={() => { this.setState({ check: !this.state.check }) }} />
					<SliderRow 
						text='Slider Row'
						iconName='check'
            
						_color='#000'
						_min={0}
						_max={100}
						_value={this.state.value}
						_onValueChange={value => { this.setState({ value }) }} />
				</SectionRow>
			</ReactNativeSettingsPage>
        );
    }
    
  }
  
 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  