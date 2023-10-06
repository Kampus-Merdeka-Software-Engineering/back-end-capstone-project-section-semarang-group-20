'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('order', 'status', {
      type: Sequelize.ENUM(['proses', 'selesai']),
    })
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('order', 'status')
  },
}
