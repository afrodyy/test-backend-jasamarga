"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Education", [
      {
        employee_id: 1,
        name: "SMKN 7 Jakarta",
        level: "Sma",
        description: "Sekolah Menengah Atas",
        created_by: "admin",
        updated_by: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_id: 2,
        name: "Universitas Negeri Jakarta",
        level: "Strata 1",
        description: "Sarjana",
        created_by: "admin",
        updated_by: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Education", null, {});
  },
};
