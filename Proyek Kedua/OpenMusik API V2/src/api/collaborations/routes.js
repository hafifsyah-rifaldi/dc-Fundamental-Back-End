const routes = (handler) => [
    {
      method: 'POST',
      path: '/collaborations',
      handler: handler.postCollaborationHandler,
      options: {
        auth: 'api_music_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/collaborations',
      handler: handler.deleteCollaborationHandler,
      options: {
        auth: 'api_music_jwt',
      },
    },
  ];
   
  module.exports = routes;