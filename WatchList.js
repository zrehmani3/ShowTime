import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WatchListing = require('./WatchListing');

import type {
  Show,
} from './ShowTypes';

type Props = {
  shows: Array<Show>,
};

class WatchList extends React.Component {
  props: Props;

  render() {
    const shows = this.props.shows.map((show, idx) =>
      <WatchListing
        isEnd={this.props.shows.length - 1 === idx}
        key={show.showID}
        show={show}
      />
    );
    return (
      <View style={styles.container}>
        {shows}
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
