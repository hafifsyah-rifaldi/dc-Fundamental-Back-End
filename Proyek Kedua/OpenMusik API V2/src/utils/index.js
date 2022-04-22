const mapDBToModel = ({
  id, name, title, year, performer, genre, duration, album_id, username,
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
});

module.exports = { mapDBToModel };
