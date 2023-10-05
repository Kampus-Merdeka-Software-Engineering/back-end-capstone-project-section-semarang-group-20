"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn("contact-us", "created_at", {
        type: Sequelize.DATE,
        allowNull: true,
      }),
      queryInterface.changeColumn("contact-us", "updated_at", {
        type: Sequelize.DATE,
        allowNull: true,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn("contact-us", "created_at", {
        type: Sequelize.DATE,
        allowNull: false, // Change allowNull to false to make it non-nullable again
      }),
      queryInterface.changeColumn("contact-us", "updated_at", {
        type: Sequelize.DATE,
        allowNull: false, // Change allowNull to false to make it non-nullable again
      }),
    ]);
  },
};
