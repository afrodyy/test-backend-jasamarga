"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.hasOne(models.EmployeeProfile, {
        foreignKey: "employee_id",
      });
      Employee.hasMany(models.EmployeeFamily, {
        foreignKey: "employee_id",
      });
      Employee.hasMany(models.Education, {
        foreignKey: "employee_id",
      });
    }
  }
  Employee.init(
    {
      nik: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Active wajib diisi" },
          notNull: { args: true, msg: "Kolom Active wajib diisi" },
        },
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Tanggal Mulai wajib diisi" },
          notNull: { args: true, msg: "Kolom Tanggal Mulai wajib diisi" },
        },
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Tanggal Berakhir wajib diisi" },
          notNull: { args: true, msg: "Kolom Tanggal Berakhir wajib diisi" },
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
      modelName: "Employee",
    }
  );
  return Employee;
};
