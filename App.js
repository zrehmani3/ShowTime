/**
 * @flow
 */

import React from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
 } from 'react-native';
import type {
  Show,
} from './ShowTypes';

const AddShow = require('./AddShow');
const WatchList = require('./WatchList');

const API_KEY = 'e0431a26e419b5fc86c8a0e35f1ad2b2';

type State = {
  showAddShowModal: boolean,
  shows: Array<Show>,
};

class App extends React.Component {
  state: State;

  constructor() {
    super();
    this.state = {
      showAddShowModal: false,
      shows: [
        {
          imageURI: 'https://image.tmdb.org/t/p/w185/dc5r71XI1gD4YwIUoEYCLiVvtss.jpg',
          imdbURI: 'https://www.imdb.com/title/tt2575988/',
          lastEpisodeAirDate: '2017-06-25',
          lastEpisodeID: '57406',
          lastEpisodeNumber: 10,
          lastSeasonNumber: 4,
          nextEpisodeAirDate: null,
          nextEpisodeNumber: null,
          popularity: 15.78758,
          showID: '60573',
          showName: 'Silicon Valley',
        },
        {
          imageURI: 'https://image.tmdb.org/t/p/w185/dc5r71XI1gD4YwIUoEYCLiVvtss.jpg',
          imdbURI: 'https://www.imdb.com/title/tt2575988/',
          lastEpisodeAirDate: '2017-06-25',
          lastEpisodeID: '57406',
          lastEpisodeNumber: 10,
          lastSeasonNumber: 4,
          nextEpisodeAirDate: null,
          nextEpisodeNumber: null,
          popularity: 15.78758,
          showID: '60574',
          showName: 'Silicon Valley',
        },
      ],
    };
  }

  render() {
    const addShowModal = (
      <Modal
        animationType={"slide"}
        onRequestClose={() => this.setState({showAddShowModal: false})}
        transparent={false}
        visible={this.state.showAddShowModal}>
       <AddShow
         onClose={() => this.setState({showAddShowModal: false})}
       />
     </Modal>
   );

    return (
      <View style={styles.container}>
        {addShowModal}
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Your Shows/Movies
          </Text>
          <Button
            color="#1e90ff"
            onPress={() => this.setState({showAddShowModal: true})}
            title="+ Add"
          />
        </View>
        <WatchList
          onShowsUpdate={this._onShowsUpdate}
          shows={this.state.shows}
        />
      </View>
    );
  }

  _onShowsUpdate = (shows: Array<Show>) => {
    this.setState({shows: shows});
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 4,
    paddingTop: 24,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

module.exports = App;
