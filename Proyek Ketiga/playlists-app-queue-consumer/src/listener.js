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

        const playlistMusic = await this._playlistsService.getPlaylistId(playlistId);
        playlistMusic.songsInPlaylist = await this._playlistsService.getSongOnPlaylist(playlistId);
        console.log('Isi Playlist: ');
        console.log(playlistMusic);
        console.log('----------------------------');
        // console.log('Song in Playlist', songsInPlaylist);
        // const playlistDetail = {
        //   playlist: {
        //     ...playlist,
        //     songs: songsInPlaylist
        //   }
        // };

        const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(playlistMusic));
        console.log("Isi email:");
        console.log(JSON.stringify(playlistMusic));
        // console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  }
   
  module.exports = Listener;