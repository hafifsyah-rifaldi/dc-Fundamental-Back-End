const { nanoid } = require('nanoid');
const { Pool } = require('pg');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');
const AuthorizationError = require('../../exceptions/AuthorizationError');
const { mapDBToModel } = require('../../utils/index');

class PlaylistsService {
    constructor() {
        this._pool = new Pool();
    }


    async addPlaylist({ name, owner, })
    {
        const id = `playlist-${nanoid(16)}`;
        // const createdAt = new Date().toISOString();
        // const updatedAt = createdAt;

        const query = {
            text: 'INSERT INTO playlists (id, name, owner) VALUES ($1, $2, $3) RETURNING id',
            values:  [id, name, owner],
        };

        const result = await this._pool.query(query);

        if (!result.rows[0].id) {
            throw new InvariantError('Playlist gagal ditambahkan');
        }

        return result.rows[0].id;
    };


    async getPlaylist(owner) {
        const query = {
            text: `SELECT playlists.id, playlists.name, users.username FROM playlists
            LEFT JOIN users ON users.id = playlists.owner
            WHERE playlists.owner = $1`,
            values: [owner],
        };
        const result = await this._pool.query(query);
        return result.rows.map(mapDBToModel);
    }


    async deletePlaylistById(id) {
        const query = {
            text: 'DELETE FROM playlists WHERE id = $1 RETURNING id',
            values: [id],
        };

        const result = await this._pool.query(query);

        if (!result.rows.length) {
            throw new NotFoundError('Playlist gagal dihapus. Id tidak ditemukan');
        }
    }




    async addSongToPlaylistId(playlistId, songId) { 
        const id = `song-onplaylist--${nanoid(16)}`;
        const query = {
            text: 'INSERT INTO songsonplaylist (id, playlist_id, song_id) VALUES($1, $2, $3) RETURNING id',
            values: [id, playlistId, songId],
        };

        const result = await this._pool.query(query);

        if (!result.rows[0].id) {
            throw new InvariantError('Lagu gagal ditambahkan ke dalam playlist');
        }
    }


    async getPlaylistId(playlistId) {
        const query = {
            text: `SELECT playlists.id, playlists.name, users.username FROM playlists
            LEFT JOIN users ON playlists.owner = users.id
            WHERE playlists.id = $1`,
            values: [playlistId],
        };
        const result = await this._pool.query(query);
        if (!result.rows.length) {
            throw new NotFoundError('Playlist tidak ditemukan');
        }
        return result.rows[0];
    }


    async getSongOnPlaylist(playlistId) {
        const query = {
            text: `SELECT songs.id, songs.title, songs.performer FROM songs
            JOIN  songsonplaylist ON songs.id = songsonplaylist.song_id
            WHERE songsonplaylist.playlist_id = $1`,
            values: [playlistId],
        };

        const result = await this._pool.query(query);
        return result.rows;
    }

    async deleteSongFromPlaylist(playlistId,songId) {
        const query = {
            text: 'DELETE from songsonplaylist WHERE playlist_id = $1 AND song_id = $2 RETURNING id',
            values: [playlistId, songId],
        };

        const result = await this._pool.query(query);

        if (!result.rows.length) {
            throw new InvariantError('Lagu gagal dihapus dari Playlist');
        }
    }


    async verifyPlaylistOwner(id, owner) {
        const query = {
            text: 'SELECT * FROM playlists WHERE id = $1',
            values: [id],
        };

        const result = await this._pool.query(query);

        if (!result.rows.length) {
            throw new NotFoundError('Playlist tidak ditemukan');
        }

        const playlist = result.rows[0];

        if (playlist.owner !== owner) {
            throw new AuthorizationError('Anda tidak berhak mengakses resource ini');
        }
    }

    async verifyPlaylistAccess(playlistId, userId) {
        try {
            await this.verifyPlaylistOwner(playlistId, userId);
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            }

        try {
            await this._collaborationsService.verifyCollaborator(playlistId, userId);
        } catch {
            throw error;
            }
        }
    }

};

module.exports = PlaylistsService;