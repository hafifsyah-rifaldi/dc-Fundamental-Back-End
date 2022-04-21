/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('songsonplaylist', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
          },
          playlist_id: {
            type: 'VARCHAR(50)',
            notNull: true,
          },
          song_id: {
            type: 'VARCHAR(50)',
            notNull: true,
          },
    });

    pgm.addConstraint('songsonplaylist', 'unique_playlist_id_and_song_id', 'UNIQUE(playlist_id, song_id)');
    pgm.addConstraint('songsonplaylist', 'fk_songsonplaylist.playlist_id_playlists.id', 'FOREIGN KEY(playlist_id) REFERENCES playlists(id) ON DELETE CASCADE');
    pgm.addConstraint('songsonplaylist', 'fk_songsonplaylist.song_id_songs.id', 'FOREIGN KEY(song_id) REFERENCES songs(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
    pgm.dropTable('songsonplaylist');
};
