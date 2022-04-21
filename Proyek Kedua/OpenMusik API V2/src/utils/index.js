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
  // createdAt: created_at,
  // updatedAt: updated_at,
  username,
});

module.exports = { mapDBToModel };
