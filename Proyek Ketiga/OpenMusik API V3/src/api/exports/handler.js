const ClientError = require('../../exceptions/ClientError');

class ExportsHandler {
    constructor(service, validator, playlistsService) {
        this._service = service;
        this._playlistsService = playlistsService;
        this._validator = validator;

        this.postExportPlaylistsHandler = this.postExportPlaylistsHandler.bind(this);
    }

    async postExportPlaylistsHandler (request, h) {
        try {
          this._validator.validateExportPlaylistsPayload(request.payload);

          const userId = request.auth.credentials.id;
          const playlistId = request.params.playlistId;
          
          await this._playlistsService.getPlaylistId(playlistId);
          await this._playlistsService.verifyPlaylistOwner(playlistId, userId);
          
          const message = {
            playlistId,
            targetEmail: request.payload.targetEmail,
          };
          
          await this._service.sendMessage('export:playlists', JSON.stringify(message));
          const response = h.response({
            status: 'success',
            message: 'Permintaan Anda sedang kami proses',
          });
          console.log("INI ADALAH ISI JSON:", JSON.stringify(message));
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

}

module.exports = ExportsHandler;