// const mapDBToModel = ({ id, name, year }) => ({ id, name, year });


const mapDBToModel = ({ id, name, title, year, number, genre, performer, duration, albumId}) => ({ 
    id, 
    name,
    title, 
    year, 
    number, 
    genre, 
    performer, 
    duration, 
    albumId
});


module.exports = mapDBToModel;