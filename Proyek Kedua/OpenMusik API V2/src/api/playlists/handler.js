const ClientError = require('../../exceptions/ClientError');

class PlaylistHandler {
    constructor(service, songsService, validator) {
        this._service = service;
        this._songsService = songsService;
        this._validator = validator;

        this.postPlaylistHandler = this.postPlaylistHandler.bind(this);
        this.getPlaylistHandler = this.getPlaylistHandler.bind(this);
        this.deletePlaylistByIdHandler = this.deletePlaylistByIdHandler.bind(this);
        this.postSongPlaylistHandler = this.postSongPlaylistHandler.bind(this);
        this.getSongPlaylistHandler = this.getSongPlaylistHandler.bind(this);
        this.deleteSongPlaylistByIdHandler = this.deleteSongPlaylistByIdHandler.bind(this);
    }

    async postPlaylistHandler(request, h) {
        try {
            this._validator.validatePlaylistPayload(request.payload);
            const { name } = request.payload;
            const { id: credentialId } = request.auth.credentials;

            const playlistId = await this._service.addPlaylist({ name, owner: credentialId });
            const response = h.response({
                status: 'success',
                data: {
                    playlistId,
                },
            });
            response.code(201);
            return response;
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                  status: 'fail',
                  message: error.message,
                });
                response.code(error.statusCode);
                return response;
              }
              // Server ERROR!
              const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
              });
              response.code(500);
              console.error(error);
              return response;
        }
    }

    async getPlaylistHandler(request, h) {
        try {
            const { id: credentialId } = request.auth.credentials;
            const playlists = await this._service.getPlaylist(credentialId);
            const response = h.response({
                status: 'success',
                data: {
                    playlists,          
                },
            });
            response.code(200);
            return response;
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                  status: 'fail',
                  message: error.message,
                });
                response.code(error.statusCode);
                return response;
              }
              // Server ERROR!
              const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
              });
              response.code(500);
              console.error(error);
              return response;
        }
    }


    async deletePlaylistByIdHandler(request, h) {
        try {
            const { playlistId } = request.params;
            const { id: credentialId } = request.auth.credentials;
            await this._service.verifyPlaylistOwner(playlistId, credentialId);
            await this._service.deletePlaylistById(playlistId);
            const response = h.response({
                status: 'success',
                message: 'Playlist telah dihapus',
            });
            response.code(200);
            return response;
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                  status: 'fail',
                  message: error.message,
                });
                response.code(error.statusCode);
                return response;
              }
              // Server ERROR!
              const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
              });
              response.code(500);
              console.error(error);
              return response;
        }
    }


    async postSongPlaylistHandler(request, h) {
        try {
            this._validator.validateSongPayload(request.payload);
            const { playlistId } = request.params;
            const { songId } = request.payload;
            const { id: credentialId } = request.auth.credentials;

            await this._songsService.getSongById(songId);
            await this._service.verifyPlaylistAccess(playlistId, credentialId);
            await this._service.addSongToPlaylistId(playlistId, songId);
            const response = h.response({
                status: 'success',
                message: 'Lagu berhasil ditambahkan ke dalam playlist',
              });
            response.code(201);
            return response;
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                  status: 'fail',
                  message: error.message,
                });
                response.code(error.statusCode);
                return response;
              }
              // Server ERROR!
              const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
              });
              response.code(500);
              console.error(error);
              return response;
        }
    }


    async getSongPlaylistHandler(request, h) {
        try {
            const { playlistId } = request.params;
            const { id: credentialId } = request.auth.credentials;

            await this._service.verifyPlaylistAccess(playlistId, credentialId);

            const playlist = await this._service.getPlaylistId(playlistId);
            const songs = await this._service.getSongOnPlaylist(playlistId);
            const response = h.response({
                status: 'success',
                data: {
                    playlists: {
                        id: playlist.id,
                        name: playlist.name,
                        username: playlist.username,
                        songs,
                    },
                },
            });
            response.code(200);
            return response;
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                  status: 'fail',
                  message: error.message,
                });
                response.code(error.statusCode);
                return response;
              }
              // Server ERROR!
              const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
              });
              response.code(500);
              console.error(error);
              return response;
        }
    }


    async deleteSongPlaylistByIdHandler(request, h) {
        try {
            this._validator.validateSongPayload(request.payload);
            const { playlistId } = request.params;
            const { songId } = request.payload;
            const { id: credentialId } = request.auth.credentials;
            
            await this._service.verifyPlaylistAccess(playlistId, credentialId);
            await this._service.deleteSongFromPlaylist(playlistId, songId, credentialId);
            const response = h.response({
                status: 'success',
                message: 'Lagu berhasil dihapus dari playlist',
            });
            response.code(200);
            return response;

        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                  status: 'fail',
                  message: error.message,
                });
                response.code(error.statusCode);
                return response;
              }
              // Server ERROR!
              const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
              });
              response.code(500);
              console.error(error);
              return response;
        }
    }
};

module.exports = PlaylistHandler;