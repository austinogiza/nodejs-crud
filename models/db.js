const {Sequelize} =require("sequelize")

module.exports = new Sequelize('crud', 'postgres', 'austinforreal', {
    host: 'localhost',
    dialect:'postgres',

  });


