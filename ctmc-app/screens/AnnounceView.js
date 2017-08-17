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
} from 'react-native'

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
        <Image 
          style={{
            width: 500,
            height: 280,
          }}
          resizeMode={"contain"}
          source={{uri: this.state.announce.img.img_large}}
        />
        <View style={styles.textRow}>
          <Text style={styles.bold}>
            Vendeur :
          </Text>
          <Text>
              {' ' + this.state.announce.data.name}
          </Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.bold}>
              Calibre :
            </Text>
            <Text>
              {' ' + this.state.announce.data.calibre}
            </Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.bold}>
              Categorie :
            </Text>
            <Text>
              {' ' + this.state.announce.data.categorie}
            </Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.bold}>
              Prix :
            </Text>
            <Text>
              {' ' + this.state.announce.data.prix}
            </Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.bold}>
              Marque :
            </Text>
            <Text>
              {' ' + this.state.announce.data.marque}
            </Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.bold}>
              Mail :
            </Text>
            <Text>
              {' ' + this.state.announce.data.mail}
            </Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.bold}>
              Téléphone :
            </Text>
            <Text>
              {' ' + this.state.announce.data.telephone}
            </Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.bold}>
              A Propos :
            </Text>
            <Text>
              {' ' + this.state.announce.data.content}
            </Text>
        </View>
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
  pre: {
    fontSize: 28,
    textAlign: 'center',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
  },
  bold: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  textRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
