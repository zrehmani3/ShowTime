/**
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';

const API_KEY = 'e0431a26e419b5fc86c8a0e35f1ad2b2';

class App extends React.PureComponent<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.introText}>
          Hello, World.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#424242',
    flex: 1,
    justifyContent: 'center',
  },
  introText: {
    color: '#ffffff',
  },
});

module.exports = App;
