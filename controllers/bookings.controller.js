const db = require('../models');
const bookings = db.bookings;

const bookRoom = (req, res, next) => {
    console.log('req', req.body);

    bookings.bulkCreate(req.body)
        .then((data) => {
            console.log('data', data);
            res.send({data, success: true, message: 'Room Booked Successfully!'});
            return;
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while product add to cart."
            });
            return;
        });
}

module.exports = {
    bookRoom
};