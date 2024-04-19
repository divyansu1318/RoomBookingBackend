
module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define("rooms", {
        name: {
            type: Sequelize.STRING
        },
        capacity: {
            type: Sequelize.INTEGER
        }
    });

    return Orders;
};