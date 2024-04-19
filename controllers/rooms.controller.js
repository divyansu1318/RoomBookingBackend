const db = require('../models');
const rooms = db.rooms;
const tags = db.tags;

const getAllRooms = (req, res, next) => {

    rooms.hasMany(db.bookings, { foreignKey: 'roomId' });
    db.bookings.belongsTo(rooms, { foreignKey: 'roomId' });

    rooms.hasMany(tags, { foreignKey: 'roomId' });
    tags.belongsTo(rooms, { foreignKey: 'roomId' });

    rooms.findAll({
        include: [
            { model: db.bookings, as: 'bookings' },
            { model: tags, as: 'tags' }
        ]
    })
    .then((data) => {
        res.send(data);
        return;
    })
};

const addRoom = (req, res, next) => {
    // console.log('req', req);
    
    var options = {
        name: req.body.name,
        isProjector: req.body.isProjector,
        isLargerScreen: req.body.isLargerScreen,
        isSound: req.body.isSound,
        capacity: req.body.capacity
    };

    rooms.create(options)
        .then((data) => {
            let tagsData = {
                isProjector: req.body.isProjector,
                isLargerScreen: req.body.isLargerScreen,
                isSound: req.body.isSound,
                roomId: data.id
            }

            tags.create(tagsData).then((tagResponse) => {
                if (tagResponse) {
                    res.send({data, success: true});
                    return;
                }
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating room."
                });
                return;
            });
            
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating room."
            });
            return;
        });
}


module.exports = {
    getAllRooms,
    addRoom
};