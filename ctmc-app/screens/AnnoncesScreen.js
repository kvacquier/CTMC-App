/*
** https://facebook.github.io/react-native/releases/0.27/docs/sample-application-movies.html
*/

import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

var REQUEST_URL = 'http://app.mauguio-tir.fr/api/?announces'

export default class AnnoncesScreen extends React.Component {
  static navigationOptions = {
    title: 'Annonces',
  };

  constructor(props) {
  super(props);
  this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
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
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderAnnounces}
        style={styles.listView}
      />
    );

  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Chargement des Annonces...
        </Text>
      </View>
    );
  }

  renderAnnounces(announce) {
    return (

        <View style={styles.container}>
          <Image source={{uri: announce.img_thumbnail}} style={styles.thumbnail} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{announce.title}</Text>
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
    textAlign: 'left',
  },
  thumbnail: {
    width: 71,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
