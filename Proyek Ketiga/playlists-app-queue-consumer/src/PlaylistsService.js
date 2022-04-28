const { Pool } = require('pg');

class PlaylistsService {
    constructor() {
        this._pool = new Pool();
    }
    
    async getPlaylistId(playlistId) {
      const queryPlaylist= {
        text:`SELECT playlists.id, playlists.name 
              FROM playlists
              WHERE playlists.id = $1`,
        values: [playlistId],
      };
      const resultPlaylist = await this._pool.query(queryPlaylist);
      
      const querySong = {
        text: `SELECT songs.id, songs.title, songs.performer
                FROM playlist_songs
                JOIN songs ON playlist_songs.song_id = songs.id
                WHERE playlist_songs.playlist_id = $1`,
        values: [playlistId],
      }
      const resultSong = await this._pool.query(querySong);

      return {
        ...resultPlaylist.rows[0],
        songs: resultSong.rows,
      }
    }
  }

module.exports = PlaylistsService;