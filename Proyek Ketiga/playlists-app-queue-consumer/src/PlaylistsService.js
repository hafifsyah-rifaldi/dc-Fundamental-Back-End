const { Pool } = require('pg');

class PlaylistsService {
    constructor() {
        this._pool = new Pool();
    }

    async getPlaylistId(playlistId) {
        const query = {
          text: `SELECT playlists.id, playlists.name FROM playlists
                LEFT JOIN users ON playlists.owner = users.id
                WHERE playlists.id = $1`,
          values: [playlistId],
        };
        const result = await this._pool.query(query);
        return result.rows[0];
    }
    
      async getSongOnPlaylist(playlistId) {
        const query = {
          text: `SELECT songs.id, songs.title, songs.performer FROM songs
                JOIN playlist_songs ON songs.id = playlist_songs.song_id
                WHERE playlist_songs.playlist_id = $1`,
          values: [playlistId],
        };
        const result = await this._pool.query(query);
        return result.rows;
    }
}

module.exports = PlaylistsService;