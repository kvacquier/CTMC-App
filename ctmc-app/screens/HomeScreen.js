import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HTMLView from 'react-native-htmlview';

import { MonoText } from '../components/StyledText';

var REQUEST_URL = 'http://mauguio-tir.fr/wp-json/wp/v2/pages/2'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'News',
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
            page: responseData,
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
      <View style={styles.container}>
        <ScrollView>
        <HTMLView
          value={this.state.page.content.rendered}
          stylesheet={styles}
          addLineBreaks={false}
          style={{margin:15}}
        />
        </ScrollView>
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Chargement de l application...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
