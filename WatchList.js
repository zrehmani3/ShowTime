import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class WatchList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Your Shows</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = WatchList;
