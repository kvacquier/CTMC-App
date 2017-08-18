/*
** https://facebook.github.io/react-native/releases/0.27/docs/sample-application-movies.html
*/

import React, { Component } from 'react'
import {
  AppRegistry,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { Button } from 'react-native-elements'
import { Ionicons, MaterialIcons, Foundation } from '@expo/vector-icons';
import ParallaxView from 'react-native-parallax-view';
import Communications from 'react-native-communications';
import HTMLView from 'react-native-htmlview';

export default class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.navigation.state.params.image,
    };
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
  });

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.state.image.img_large}}/>
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
