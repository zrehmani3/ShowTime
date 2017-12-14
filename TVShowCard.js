/**
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
 } from 'react-native';
import type {TVShow} from './TVShow';

type Props = {
  tvShow: TVInfo,
};
//
// <View>
//   <Text style={styles.titleText}>{title}</Text>
//   <Image style={{width: 60, height: 60}} source={{uri:this.props.tvShow.pictureURI}}/>
// </View>

class TVShowCard extends React.PureComponent<Props> {
  render() {
    const title = this.props.tvShow.title;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={{width: 60, height: 60}} source={{uri:this.props.tvShow.pictureURI}}/>
          <View>
            <Text style={styles.titleText}> {this.props.tvShow.seasons[0].episodes[0].episodeTitle}</Text>
            <Text style={styles.titleText}> {this.props.tvShow.seasons[0].episodes[0].airDate}</Text>
            <Text style={styles.titleText}> {this.props.tvShow.seasons[0].episodes[0].episodeNumber}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: "white"
  },
  container: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    margin: 5,
  }
});


module.exports = TVShowCard;
