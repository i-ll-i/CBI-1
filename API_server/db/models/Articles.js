const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connect.js');

const Articles = sequelize.define( 'Articles' , {

    heading : {
        type : DataTypes.STRING,
        allowNull : false
    },
    link_to_the_image: {
        type : DataTypes.STRING,
        allowNull: false
    },
    annotation : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }

}, {
    freezeTableName: true
});

module.exports = Articles;