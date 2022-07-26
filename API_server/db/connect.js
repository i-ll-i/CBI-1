const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    "page_blog" ,
    "postgres" ,
    "HikigayaHachiman" , {
        host: "127.0.0.1" ,
        dialect: 'postgres'
    },
);

module.exports = sequelize;