class Listener {
    constructor(playlistsService, mailSender) {
      this._playlistsService = playlistsService;
      this._mailSender = mailSender;
   
      this.listen = this.listen.bind(this);
    }
   
    async listen(message) {
      try {
        const { playlistId, targetEmail } = JSON.parse(message.content.toString());
        
        const playlist = await this._playlistsService.getPlaylistId(playlistId);
        const songsInPlaylist = await this._playlistsService.getSongOnPlaylist(playlistId);
        const playlistDetail = {
          playlist: {
            id: playlist.id,
            name: playlist.name,
            songsInPlaylist
          }
        }
        const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(playlistDetail));
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  }
   
  module.exports = Listener;