'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
