/* import sequelize & dotenv */
const Sequelize = require("sequelize");
require("dovenv").config();

let sequelize;

/* set up sequelize connection */
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DBPASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port:3306
        }
    );
}

module.exports = sequelize