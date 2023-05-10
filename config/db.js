const { Sequelize, DataTypes } = require('sequelize');
const chalk = require('chalk');
const sequelizeDb = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelizeDb.authenticate();
    console.log(chalk.green('\u2714') + ' Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelizeDb = sequelizeDb;

db.user = require('../models/user')(sequelizeDb, DataTypes);
db.contact = require('../models/contact')(sequelizeDb, DataTypes);
db.sequelizeDb.sync({ force: true });

module.exports = db;