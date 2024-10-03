import db from '../config/db.js';

const MovieSchema = new db.Schema({
    nome: {
        type: String,
        required: true,
    },
    release_date: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    classification: {
        type: String,
        enum: ['Livre,', 'Maior16', 'Maior18'],
    },
});

const Movie = db.model('Movie', MovieSchema);

export default Movie;
