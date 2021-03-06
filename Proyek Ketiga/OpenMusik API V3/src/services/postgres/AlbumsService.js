const { nanoid } = require('nanoid');
const { Pool } = require('pg');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class AlbumsService {
  constructor(cacheService) {
    this._pool = new Pool();
    this._cacheService = cacheService;
  }

  async addAlbum({ name, year, coverUrl }) {
    const id = `album-${nanoid(16)}`;

    const query = {
      text: 'INSERT INTO albums VALUES($1, $2, $3, $4) RETURNING id',
      values: [id, name, year, coverUrl],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new InvariantError('Album gagal ditambahkan');
    }

    await this._cacheService.delete('albums');
    return result.rows[0].id;
  }

  async getAlbumById(id) {
    try {
      const result = await this._cacheService.get(`album:${id}`);
      return { album: JSON.parse(result), isCache: 1 };
    } catch (error) {
      const query = {
        text: 'SELECT * FROM albums WHERE id = $1',
        values: [id],
      };
      const result = await this._pool.query(query);

      if (!result.rows.length) {
        throw new NotFoundError('Album tidak ditemukan');
      }

      await this._cacheService.set(`album:${id}`, JSON.stringify(result.rows[0]));
      return { album: result.rows[0] };
    }
  }

  async editAlbumById(id, { name, year, coverUrl }) {
    const query = {
      text: 'UPDATE albums SET name = $1, year = $2, "coverUrl" = $3 WHERE id = $4 RETURNING id',
      values: [name, year, coverUrl, id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal memperbarui album. Id tidak ditemukan');
    }

    await this._cacheService.delete(`album:${id}`);
  }

  async deleteAlbumById(id) {
    const query = {
      text: 'DELETE FROM albums WHERE id = $1 RETURNING id',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Album gagal dihapus. Id tidak ditemukan');
    }

    await this._cacheService.delete(`album:${id}`);
  }

  async getSongInAlbum(id) {
    try {
      const result = await this._cacheService.get(`songs-album:${id}`);
      return { songs: JSON.parse(result), isCache: 1 };
    } catch (error) {
      const query = {
        text: 'SELECT id, title, performer FROM songs WHERE album_id = $1',
        values: [id],
      };
      const result = await this._pool.query(query);
      await this._cacheService.set(`songs-album:${id}`, JSON.stringify(result.rows));
      return { songs: result.rows };
    }
  }

  //* Cover Album
  async insertAlbumCover(albumId, coverUrl) {
    const query = {
      text: 'UPDATE albums SET "coverUrl" = $2 WHERE id = $1',
      values: [albumId, coverUrl],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('Cover gagal ditambahkan');
    }

    await this._cacheService.delete(`album:${albumId}`);
  }

  //* Likes Album
  async addLikeAlbum(albumId, userId) {
    const queryAddLike = {
      text: 'SELECT * FROM user_albumlikes WHERE album_id = $1 AND user_id = $2',
      values: [albumId, userId],
    };
    const resultAddLike = await this._pool.query(queryAddLike);

    if (!resultAddLike.rowCount) {
      const id = `likes-${nanoid(16)}`;
      const queryInsertLike = {
        text: 'INSERT INTO user_albumlikes (id, album_id, user_id) VALUES ($1, $2, $3)',
        values: [id, albumId, userId],
      };
      const resultInsertLike = await this._pool.query(queryInsertLike);

      if (!resultInsertLike.rowCount) {
        throw new InvariantError('Like gagal ditambahkan');
      }
    } else {
      const queryDeleteLike = {
        text: 'DELETE FROM user_albumlikes WHERE album_id = $1 AND user_id = $2',
        values: [albumId, userId],
      };
      const resultDeleteLike = await this._pool.query(queryDeleteLike);

      if (!resultDeleteLike.rowCount) {
        throw new InvariantError('Like gagal dihapus');
      }
    }
    await this._cacheService.delete(`likes:${albumId}`);
  }

  async getLikeAlbum(albumId) {
    try {
      const result = await this._cacheService.get(`likes:${albumId}`);
      return { likes: JSON.parse(result), isCache: 1 };
    } catch (error) {
      const query = {
        text: 'SELECT user_id FROM user_albumlikes WHERE album_id = $1',
        values: [albumId],
      };
      const result = await this._pool.query(query);

      await this._cacheService.set(`likes:${albumId}`, JSON.stringify(result.rows));
      return { likes: result.rows };
    }
  }
}

module.exports = AlbumsService;
