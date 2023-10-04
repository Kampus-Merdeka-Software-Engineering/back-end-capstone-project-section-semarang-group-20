"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      jenis_layanan: {
        type: Sequelize.ENUM(["reguler", "kilat"]),
        allowNull: false,
      },
      tanggal_pengiriman: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nomor_resi: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      alamat: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      berat_barang: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      harga_pengiriman: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("order")
  },
};
