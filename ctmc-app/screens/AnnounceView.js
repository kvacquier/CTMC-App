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
        <Image source={{uri: this.state.announce.img_medium}} style={styles.thumbnail} />
        <HTMLView
          value={this.state.announce.content}
          stylesheet={styles}
          addLineBreaks={false}
          style={{margin:15}}
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
    marginTop: 0,
    width: 500,
    height: 200,
  },
  pre: {
    fontSize: 28,
    textAlign: 'center',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
  },
});
