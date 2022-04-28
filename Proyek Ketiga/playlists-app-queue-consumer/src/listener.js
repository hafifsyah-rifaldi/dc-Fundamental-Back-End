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
      const playlists = await this._playlistsService.getPlaylistId(playlistId);
      console.log(playlists);
      console.log("--------------------------------");
      const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(playlists));
      console.log("Isi email:");
      console.log(JSON.stringify(playlists));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
 
module.exports = Listener;