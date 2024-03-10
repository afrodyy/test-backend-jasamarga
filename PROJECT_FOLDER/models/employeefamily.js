"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeFamily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EmployeeFamily.belongsTo(models.Employee, {
        foreignKey: "employee_id",
      });
    }
  }
  EmployeeFamily.init(
    {
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Karyawan wajib diisi" },
          notNull: { args: true, msg: "Kolom Karyawan wajib diisi" },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      identifier: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      place_of_birth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      religion: {
        type: DataTypes.ENUM,
        values: ["Islam", "Katolik", "Buda", "Protestan", "Konghucu"],
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Agama wajib diisi" },
          notNull: { args: true, msg: "Kolom Agama wajib diisi" },
        },
      },
      is_life: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Status Hidup wajib diisi" },
          notNull: { args: true, msg: "Kolom Status Hidup wajib diisi" },
        },
      },
      is_divorced: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Status Menikah wajib diisi" },
          notNull: { args: true, msg: "Kolom Status Menikah wajib diisi" },
        },
      },
      relation_status: {
        type: DataTypes.ENUM,
        values: ["Suami", "Istri", "Anak", "Anak Sambung"],
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Hubungan wajib diisi" },
          notNull: { args: true, msg: "Kolom Hubungan wajib diisi" },
        },
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "EmployeeFamily",
    }
  );
  return EmployeeFamily;
};
