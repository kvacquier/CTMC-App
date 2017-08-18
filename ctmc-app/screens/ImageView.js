/*
** https://facebook.github.io/react-native/releases/0.27/docs/sample-application-movies.html
*/

import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom';

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
        <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width}
            imageHeight={Dimensions.get('window').height}>

            <Image style={{width:Dimensions.get('window').width, height: Dimensions.get('window').height, resizeMode: "contain"}}
               source={{uri: this.state.image.img_large}}
               />

        </ImageZoom>
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
