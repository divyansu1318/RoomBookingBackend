
module.exports = (sequelize, Sequelize) => {
    const Tags = sequelize.define("tags", {
        roomId: {
            type: Sequelize.INTEGER
        },
        isProjector: {
            type: Sequelize.BOOLEAN
        },
        isLargerScreen: {
            type: Sequelize.BOOLEAN
        },
        isSound: {
            type: Sequelize.BOOLEAN
        },
    });

    return Tags;
};