import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView,
} from 'react-native';

import type {
  Show,
} from './ShowTypes';

type Props = {
  isEnd: boolean,
  show: Show,
};

class WatchList extends React.Component {
  props: Props;

  render() {
    const borderBottom = this.props.isEnd
      ? {
          borderBottomColor: '#b3b3b3',
          borderBottomWidth: .5,
        }
      : null;
    const nextEpisodeInfo = this.props.show.nextEpisodeNumber && this.props.show.nextEpisodeAirDate
      ? <Text>
          Next Episode {this.props.show.nextEpisodeNumber}
          {' '}airs on {this.props.show.nextEpisodeAirDate}
        </Text>
      : <Text style={styles.nextEpisodeUnknown}>
          Next Episode Unknown
        </Text>;
    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(this.props.show.imdbURI)}>
        <View style={[styles.container, borderBottom]}>
          <Image
            resizeMode={'stretch'}
            source={{uri: this.props.show.imageURI}}
            style={{height: 80, width: 80}}
          />
          <View style={styles.showInfo}>
            <Text style={{fontWeight: 'bold'}}>
              {this.props.show.showName}
            </Text>
            <Text>
              Season: {this.props.show.lastSeasonNumber}
            </Text>
            <Text>
              Last Episode {this.props.show.lastEpisodeNumber}
              {' '}aired on {this.props.show.lastEpisodeAirDate}
            </Text>
            {nextEpisodeInfo}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#b3b3b3',
    borderTopWidth: .5,
    flexDirection: 'row',
    padding: 12,
  },
  nextEpisodeUnknown: {
    color: '#90949c',
    fontStyle: 'italic',
  },
  showInfo: {
    justifyContent: 'center',
    paddingLeft: 12,
  },
});

module.exports = WatchList;
