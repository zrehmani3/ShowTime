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

const CalendarList = require('./CalendarList');

const API_KEY = 'e0431a26e419b5fc86c8a0e35f1ad2b2';

class App extends React.PureComponent<{}> {
  render() {
    const tvInfo: Array<TVShow> = [
      {
        title: 'Parks & Rec < The Office',
        pictureURI: 'https://showprobe.files.wordpress.com/2015/07/pr1.jpeg',
        seasons: [{
          seasonNumber: 1,
          episodes: [{
            episodeNumber: 1,
            airDate: 'Yesterday',
            episodeTitle: 'Pilot',
          }],
        }],
      },
      {
        title: 'The Office > Parks & Rec',
        pictureURI: 'https://www.nbc.com/sites/nbcunbc/files/files/styles/640x360/public/images/2016/1/19/MDot-TheOffice-640x360-MP.jpg?itok=Gn98SGYE',
        seasons: [{
          seasonNumber: 1,
          episodes: [{
            episodeNumber: 1,
            airDate: 'Yesterday',
            episodeTitle: 'Pilot',
          }],
        }],
      },
    ];
    return (
      <View style={styles.container}>
        <CalendarList tvInfo={tvInfo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#424242',
    flex: 1,
  },
});

module.exports = App;
