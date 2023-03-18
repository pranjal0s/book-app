'use strict';

const sequelize = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    console.log('entered migration')
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('bookEntry', {
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description : {
        allowNull:false,
        type: Sequelize.STRING
      },
      published: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },

      //these fields will be managed by sequelized

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
      
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('bookEntry');
  }
};
