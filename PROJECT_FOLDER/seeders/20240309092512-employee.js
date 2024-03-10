"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Employees", [
      {
        nik: "11012",
        name: "Budi",
        is_active: true,
        start_date: "2022-12-12",
        end_date: "2029-12-12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nik: "11013",
        name: "Jarot",
        is_active: true,
        start_date: "2021-09-01",
        end_date: "2028-09-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Employees", null, {});
  },
};
