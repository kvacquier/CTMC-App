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
  FlatList,
  TouchableHighlight,
} from 'react-native';

var REQUEST_URL = 'http://app.mauguio-tir.fr/api/?announces'

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }

  render() {
    const item = this.props.item;
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.container} onPressItem={this._onPressItem}>
            <Image source={{uri: item.img_thumbnail}} style={styles.thumbnail} />
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class AnnoncesScreen extends React.Component {

  _keyExtractor = (item, index) => index;
  
  _renderItem = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );

  _onPressItem = (index) => {
    const {navigate} = this.props.navigation;
    navigate("AnnounceView", {announce: this.state.announces[index]})    
  };

  static navigationOptions = {
    title: 'Annonces',
  };

  constructor(props) {
  super(props);
  this.state = {
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
          announces: responseData,
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
      <FlatList
        data={this.state.announces}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Chargement des Petites Annonces...
        </Text>
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
    padding: 10
  },
  rightContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    fontSize: 20,
    textAlign: 'left',
  },
  thumbnail: {
    width: 71,
    height: 81,
    marginRight: 10
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
