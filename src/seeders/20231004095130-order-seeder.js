"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("order", [
      {
        id: "6877717b-64c0-4899-b494-92efd85fd41a",
        jenis_layanan: "kilat",
        tanggal_pengiriman: new Date(),
        nomor_resi: "RVS-1234567890",
        alamat: "Denpasar",
        berat_barang: 20.0,
        harga_pengiriman: 20.0,
        nama_pengirim: "Satya",
        nama_penerima: "Gita",
        alamat_asal: "Jakarta",
        no_telpon: "08221234542",
        status: 'proses',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("order", null, {});
  },
};
