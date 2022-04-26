const routes = (handler) => [
    {
      method: 'POST',
      path: '/export/playlists/{playlistId}',
      handler: handler.postExportPlaylistsHandler,
      options: {
        auth: 'api_music_jwt',
      },
    },
  ];
   
  module.exports = routes;