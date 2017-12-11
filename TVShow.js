/**
 * @flow
 */

export type TVShow = {
  title: string,
  seasons: Array<TVSeason>,
  pictureURI: string,
};

export type TVSeason = {
  seasonNumber: number,
  episodes: Array<TVEpisode>,
};

export type TVEpisode = {
  episodeNumber: number,
  airDate: string,
  episodeTitle: string,
};
