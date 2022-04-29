class Listener {
  constructor(playlistsService, mailSender) {
    this._playlistsService = playlistsService;
    this._mailSender = mailSender;

    this.listen = this.listen.bind(this);
  }

  async listen(message) {
    try {
      const { playlistId, targetEmail } = JSON.parse(message.content.toString());
      const dataPlay = await this._playlistsService.getPlay(playlistId);
      const dataSong = await this._playlistsService.getSong(playlistId);
      const detailPlaylist = {
        playlists: {
          ...dataPlay,
          songs: dataSong,
        },
      };
      console.log(detailPlaylist);
      const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(detailPlaylist));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Listener;
