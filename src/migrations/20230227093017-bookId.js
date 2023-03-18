'use strict';

const { query } = require('express');
const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return Promise.all([
    queryInterface.addColumn('bookEntry','book_Id' ,{
        primaryKey: true,
        type:sequelize.INTEGER,
        allowNull: false,
      }),
      queryInterface.addColumn('bookEntry','quantity', {
        type: sequelize.INTEGER,
        allowNull: false
      }),
      queryInterface.addColumn('bookEntry', 'issued_Books', {
        type:sequelize.INTEGER,
        allowNull: true
      }),
      queryInterface.addColumn('bookEntry', 'genre', {
        type:sequelize.STRING,
        allowNull:false
      }),
    ]); 
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('bookEntry')
  }
};
