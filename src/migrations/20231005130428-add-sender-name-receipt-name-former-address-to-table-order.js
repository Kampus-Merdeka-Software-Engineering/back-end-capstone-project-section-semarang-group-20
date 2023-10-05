"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("order", "nama_pengirim", {
        type: Sequelize.STRING(100),
        allowNull: false,
      }),
      queryInterface.addColumn("order", "nama_penerima", {
        type: Sequelize.STRING(100),
        allowNull: false,
      }),
      queryInterface.addColumn("order", "alamat_asal", {
        type: Sequelize.STRING(255),
        allowNull: false,
      }),
      queryInterface.addColumn("order", "no_telpon", {
        type: Sequelize.STRING(20),
        allowNull: false,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('order', 'nama_pengirim'),
      queryInterface.removeColumn('order', 'nama_penerima'),
      queryInterface.removeColumn('order', 'alamat_asal'),
      queryInterface.removeColumn('order', 'no_telpon'),
    ])
  },
};
