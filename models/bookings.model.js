
module.exports = (sequelize, Sequelize) => {
    const Bookings = sequelize.define("bookings", {
        roomId: {
            type: Sequelize.INTEGER
        },
        from: {
            type: Sequelize.STRING
        },
        to: {
            type: Sequelize.STRING
        },
        isCanceled: {
            type: Sequelize.BOOLEAN
        },
        bookingDate: {
            type: Sequelize.DATEONLY
        }
    });

    return Bookings;
};