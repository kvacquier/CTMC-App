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

  _onPressTel = () => Communications.phonecall(this.state.announce.data.telephone, true)
  _onPressMail = () => Communications.email(this.state.announce.data.mail, null, null, "Annonces CTMC", "")

  _onPressImage() {
    const {navigate} = this.props.navigation;
    navigate("ImageView", {image: this.state.announce.img})   
  }

  render() {
    return (

      <ParallaxView
        backgroundSource={{uri: this.state.announce.img.img_large}}
        windowHeight={250}
        scrollableViewStyle={{ backgroundColor: 'red' }}
        header={
          <Text style={styles.containerClear} onPress={() => this._onPressImage() }></Text>
        }
        >
        <View>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.textRow}>
                <Text style={styles.h2}>Caracteristique</Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.bold}>
                    Marque :
                  </Text>
                  <Text style={styles.data}>
                    {this.state.announce.data.marque}
                  </Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.bold}>
                    Modele :
                  </Text>
                  <Text style={styles.data}>
                    {this.state.announce.data.modele}
                  </Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.bold}>
                    Categorie :
                  </Text>
                  <Text style={styles.data}>
                    {this.state.announce.data.categorie}
                  </Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.bold}>
                    Calibre :
                  </Text>
                  <Text style={styles.data}>
                    {this.state.announce.data.calibre}
                  </Text>
              </View>
                <View style={styles.textRow}>
                  <Text style={styles.h2}>A Propos</Text>
                </View>
              <View style={styles.textRow}>
                  <Text style={styles.content}>
                    {this.state.announce.data.content}
                  </Text>
              </View>
              <View style={styles.textRow}>
                  <Text style={styles.price}>
                    Prix : {this.state.announce.data.prix} €
                  </Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.h2}>Contact</Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.bold}>
                  Vendeur :
                </Text>
                <Text style={styles.data}>
                    {this.state.announce.data.name}
                </Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.bold}>
                    Mail :
                  </Text>
                  <Text style={styles.data}>
                    {this.state.announce.data.mail}
                  </Text>
              </View>
              <View style={styles.textRow}>
                <Text style={styles.bold}>
                    Téléphone :
                  </Text>
                  <Text style={styles.data}>
                    {this.state.announce.data.telephone}
                  </Text>
              </View>
              <View style={styles.buttonRow}>
                <Button
                  icon={{name: 'phone'}}
                  onPress={this._onPressTel}
                  title="Téléphoner"
                  color="#FFFFFF"
                  backgroundColor='#87C050'
                />
                <Button
                  icon={{name: 'email'}}
                  onPress={this._onPressMail}
                  title="Envoyer un E-Mail"
                  color="#FFFFFF"
                  backgroundColor='#87C050'
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ParallaxView>
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
  containerClear: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bold: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    textAlign: 'left',
    marginLeft: 15,
  },
  data: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    textAlign: 'left',
    flex: 1,
    marginHorizontal: 5,
  },
  content: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    textAlign: 'left',
    flex: 1,
    marginHorizontal: 15,
  },
  h1: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    textAlign: 'left',
    flex: 1,
    marginHorizontal: 5,
  },
  h2: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    textDecorationLine: 'underline',
    flex: 1,
    marginTop: 32,
    marginBottom: 10,
  },
  price: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 2,
    padding: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    marginTop: 32,
  },
  textRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonRow: {
    flex: 1,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  separator: {
    height: 1,
    flex: 1,
    backgroundColor: 'black'
  },
});
