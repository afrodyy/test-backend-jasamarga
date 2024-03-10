"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("EmployeeFamilies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employee_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      identifier: {
        type: Sequelize.STRING,
      },
      job: {
        type: Sequelize.STRING,
      },
      place_of_birth: {
        type: Sequelize.STRING,
      },
      date_of_birth: {
        type: Sequelize.DATE,
      },
      religion: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["Islam", "Katolik", "Buda", "Protestan", "Konghucu"],
      },
      is_life: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      is_divorced: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      relation_status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["Suami", "Istri", "Anak", "Anak Sambung"],
      },
      created_by: {
        type: Sequelize.STRING,
      },
      updated_by: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("EmployeeFamilies");
  },
};
