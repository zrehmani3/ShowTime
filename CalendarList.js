/**
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
 } from 'react-native';
import type {TVShow} from './TVShow';

const TVShowCard = require('./TVShowCard');

const API_KEY = 'e0431a26e419b5fc86c8a0e35f1ad2b2';

type Props = {
  tvInfo: Array<TVInfo>
};

class CalendarList extends React.PureComponent<Props> {
  render() {
    const tvInfoCards = this.props.tvInfo.map(
      tvShow => <TVShowCard key={tvShow.title} tvShow={tvShow} />
    );
    return (
      <View style={styles.container}>
        {tvInfoCards}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

module.exports = CalendarList;
