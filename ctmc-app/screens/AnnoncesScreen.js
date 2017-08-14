/*
** https://facebook.github.io/react-native/releases/0.27/docs/sample-application-movies.html
*/

import React, { Component } from 'react'
import { ExpoLinksView } from '@expo/samples';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var REQUEST_URL = 'http://mauguio-tir.fr/wp-json/wp/v2/posts?categories=8'

export default class AnnoncesScreen extends React.Component {
  static navigationOptions = {
    title: 'Annonces',
  };
  
  constructor(props) {
    super(props);
    this.state = {
      announces: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          announces: responseData,
        });
      })
      .done();
  }

  render() {
    if (!this.state.announces) {
      return this.renderLoadingView();
    }

    var announce = this.state.announces[0];
    return this.renderAnnounces(announce);
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Chargement Annonces...
        </Text>
      </View>
    );
  }

  renderAnnounces(announce) {
    return (
      <View style={styles.container}>

        <View style={styles.rightContainer}>
          <Text style={styles.title}>{announce.title.rendered}</Text>
          <Text style={styles.year}>{announce.id}</Text>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});

