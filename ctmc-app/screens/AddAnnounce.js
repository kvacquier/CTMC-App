/*
** https://react-native-training.github.io/react-native-elements/API/forms/
*/

import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Picker,
} from 'react-native'
import { FormLabel, FormInput, Divider, Button } from 'react-native-elements'
import { ImagePicker } from 'expo';

export default class AddAnnounce extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mail: '',
      telephone: '',
      img: 'http://app.mauguio-tir.fr/api/img/null.png',
      arme: '',
      modele: '',
      marque: '',
      calibre: '',
      categorie: 'A',
      comment: '',
      prix: ''
    };
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Poster une Annonce',
  });

  _pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });
    console.log(result.uri);
    if (!result.cancelled) {
      this.setState({ img: result.uri });
    }
  };

  _pickImageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ img: result.uri });
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.h1}>Informations</Text>
          <Text style={styles.h2}>
            Nous rappelons à nos annonceurs et à nos lecteurs,
            que les les annonces sont passées sous leur seule
            responsabilité et qu’ils doivent impérativement se
            conforter à la législation en vigueur pour tout achat
            ou vente d’armes et matériels de la catégorie B.
          </Text>

          <Text style={styles.h1}>Formulaire</Text>


          <FormLabel containerStyle={styles.label}>
            Nom & Prénom
          </FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="default"
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}/>


          <FormLabel containerStyle={styles.label}>
            Adresse E-Mail
          </FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="email-address"
            onChangeText={(mail) => this.setState({mail})}
            value={this.state.mail}/>

          <FormLabel containerStyle={styles.label}>
            Telephone
          </FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="phone-pad"
            onChangeText={(telephone) => this.setState({telephone})}
            value={this.state.telephone}/>

          <FormLabel containerStyle={styles.label}>
            Nom de l arme
          </FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="default"
            onChangeText={(arme) => this.setState({arme})}
            value={this.state.arme}/>

          <FormLabel containerStyle={styles.label}>
            Modele
          </FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="default"
            onChangeText={(modele) => this.setState({modele})}
            value={this.state.modele}/>

          <FormLabel containerStyle={styles.label}>
            Marque
          </FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="default"
            onChangeText={(marque) => this.setState({marque})}
            value={this.state.marque}/>

          <FormLabel containerStyle={styles.label}>
            Calibre
          </FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="numeric"
            onChangeText={(calibre) => this.setState({calibre})}
            value={this.state.calibre}/>

          <FormLabel containerStyle={styles.label}>
            Categorie
          </FormLabel>
          <Picker
            selectedValue={this.state.categorie}
            onValueChange={(itemValue, itemIndex) => this.setState({categorie: itemValue})}>
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
            <Picker.Item label="C" value="C" />
            <Picker.Item label="D" value="D" />
          </Picker>

          <FormLabel containerStyle={styles.label}>
            Commentaire
          </FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="default"
            onChangeText={(comment) => this.setState({comment})}
            value={this.state.comment}/>

          <FormLabel containerStyle={styles.label}>
            Prix
          </FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="numeric"
            onChangeText={(prix) => this.setState({prix})}
            value={this.state.prix}/>

            <View style={styles.buttonRow}>
              <Button
                icon={{name: 'add-a-photo'}}
                onPress={this._pickImageCamera}
                title="Prendre la photo"
                color="#FFFFFF"
                backgroundColor='#87C050'
              />
              <Button
                icon={{name: 'photo-library'}}
                onPress={this._pickImageLibrary}
                title="Sur l'appareil"
                color="#FFFFFF"
                backgroundColor='#87C050'
              />
            </View>

            <Image
                style={styles.image}
                source={{uri: this.state.img}}
              />

            <View style={styles.buttonRow}>
              <Button
                icon={{name: 'send'}}
                onPress={this._pickImageLibrary}
                title="Publier l'annonce"
                color="#FFFFFF"
                backgroundColor='#87C050'
              />
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
    //backgroundColor: '#000000',
  },
  h1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    textAlign: 'left',
    flex: 1,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  h2: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    flex: 1,
    margin: 15,
  },
  input: { paddingHorizontal: 5, color: 'black'},
  label: {alignSelf: 'stretch'},
  buttonRow: {
    flex: 1,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  image: {
    resizeMode: "contain",
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 9 / 16
  },
});
