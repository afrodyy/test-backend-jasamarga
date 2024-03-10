"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("EmployeeProfiles", [
      {
        employee_id: 1,
        place_of_birth: "Jakarta",
        date_of_birth: "1997-05-02",
        gender: "Laki-laki",
        is_married: true,
        created_by: "admin",
        updated_by: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_id: 2,
        place_of_birth: "Sukabumi",
        date_of_birth: "1996-05-02",
        gender: "Laki-laki",
        is_married: false,
        created_by: "admin",
        updated_by: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("EmployeeProfiles", null, {});
  },
};
