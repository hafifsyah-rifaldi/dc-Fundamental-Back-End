class Listener {
    constructor(playlistsService, mailSender) {
      this._playlistsService = playlistsService;
      this._mailSender = mailSender;
   
      this.listen = this.listen.bind(this);
    }
   
    async listen(message) {
      try {
        const { playlistId, targetEmail } = JSON.parse(message.content.toString());
        console.log('Playlist ID:', playlistId);
        console.log('targetEmail:', targetEmail);

        const songsInPlaylist = await this._playlistsService.getSongOnPlaylist(playlistId);
        console.log('Song in Playlist', songsInPlaylist);

        const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(songsInPlaylist));
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  }
   
  module.exports = Listener;