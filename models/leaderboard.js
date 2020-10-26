module.exports = function(sequelize, DataTypes) {
    let leaderboard = sequelize.define('leaderboard', {
        flips: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // leaderboard.associate = function(models) {};

    return leaderboard;
};