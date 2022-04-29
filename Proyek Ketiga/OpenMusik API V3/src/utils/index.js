const mapDBToModel = ({
  id, name, title, year, performer, genre, duration, album_id, username, coverUrl,
}) => ({
  id,
  name,
  title,
  year,
  performer,
  genre,
  duration,
  albumId: album_id,
  username,
  coverUrl,
});

module.exports = { mapDBToModel };
