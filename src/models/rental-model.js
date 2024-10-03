import db from '../config/db.js';

const RentalSchema = new db.Schema({
    user_id: {
        type: db.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    movie_id: {
        type: db.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    rent_date: {
        type: Date,
        required: true,
    },
    return_date: {
        type: Date,
        required: true,
    },
});

const Rental = db.model('Rental', RentalSchema);

export default Rental;
