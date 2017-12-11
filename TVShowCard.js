/**
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';
import type {TVShow} from './TVShow';


type Props = {
  tvShow: TVInfo
};

class TVShowCard extends React.PureComponent<Props> {
  render() {
    const title = this.props.tvShow.title;
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = TVShowCard;
