/*
** https://react-native-training.github.io/react-native-elements/API/forms/
*/

import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'


export default class AddAnnounce extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Poster une Annonce',    
  });

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Name</FormLabel>
        <FormInput/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#000000',
  },
});
