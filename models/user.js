module.exports = (sequelizeDb, DataTypes) => {
    sequelizeDb.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
        }
    }, {
        createdAt: false
    });
};