"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("contact-us", [
      {
        id: "6877717b-64c0-4899-b494-92efd85fd41a",
        name: "Gita Sekar",
        email: "gitasekar@gmail.com",
        company_name: "company X",
        message: "This is seeder message",
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contact-us", null, {});
  },
};
