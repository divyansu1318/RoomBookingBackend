
module.exports = (sequelize, Sequelize) => {
    const Bookings = sequelize.define("users", {
        userName: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        session: {
            type: Sequelize.STRING
        }
    });

    return Bookings;
};