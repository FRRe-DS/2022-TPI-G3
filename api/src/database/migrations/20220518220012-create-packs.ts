'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Packs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      ticketId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Tickets',
          },
          key: 'id',
        },
      },

      hotelId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Hotels',
          },
          key: 'id',
        },
      },

      insuranceId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Insurances',
          },
          key: 'id',
        },
      },

      showId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Shows',
          },
          key: 'id',
        },
      },
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Packs');
  },
};