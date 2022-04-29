const { Pool } = require('pg');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlay(playlistId) {
    const queryPlaylist = {
      text: `SELECT playlists.id, playlists.name 
            FROM playlists
            WHERE playlists.id = $1`,
      values: [playlistId],
    };
    const result = await this._pool.query(queryPlaylist);
    return result.rows[0];
  }

  async getSong(playlistId) {
    const querySong = {
      text: `SELECT songs.id, songs.title, songs.performer
            FROM playlist_songs
            JOIN songs ON playlist_songs.song_id = songs.id
            WHERE playlist_songs.playlist_id = $1`,
      values: [playlistId],
    };
    const result = await this._pool.query(querySong);
    return result.rows;
  }
}

module.exports = PlaylistsService;
