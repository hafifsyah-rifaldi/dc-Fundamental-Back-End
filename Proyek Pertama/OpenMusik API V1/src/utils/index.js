const mapDBToModelAlbums = ({ id, name, year }) => ({ id, name, year });


const mapDBToModelSongs = ({ id, title, year, number, genre, performer, duration, albumId}) => ({ 
    id, 
    title, 
    year, 
    number, 
    genre, 
    performer, 
    duration, 
    albumId
});


module.exports = { mapDBToModelAlbums, mapDBToModelSongs };