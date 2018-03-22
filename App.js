import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Calc } from './src/components/screens'

type Props = {};
export default class App extends Component{
  render() {
    return (<View style={styles.container}>
      <Calc />
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
