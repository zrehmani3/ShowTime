/**
 * @flow
 */

import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  onClose: () => void,
};

class AddShow extends React.Component {
  props: Props;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Your Shows/Movies
        </Text>
        <TouchableOpacity
          onPress={this.props.onClose}>
          <View style={styles.closeButton}>
            <Text style={{color: '#ffffff'}}>
              Close
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    backgroundColor: '#0000ff',
    borderRadius: 6,
    height: 30,
    justifyContent: 'center',
    margin: 12,
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

module.exports = AddShow;
