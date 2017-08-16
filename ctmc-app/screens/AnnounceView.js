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
  ListView,
} from 'react-native';

import HTMLView from 'react-native-htmlview';

export default class AnnounceView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      announce: this.props.navigation.state.params.announce, 
    };
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.announce.title,
  });

  render() {    
    return (
      <ScrollView>
        <View style={styles.container}>
        <Image source={{uri: this.state.announce.img_thumbnail}} style={styles.thumbnail} />
        <HTMLView
          value={this.state.announce.content}
          stylesheet={styles}
          addLineBreaks={false}
        />
      </View>
    </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
  },
  thumbnail: {
    marginTop: 8,
    width: 150,
    height: 150,
  },
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});
