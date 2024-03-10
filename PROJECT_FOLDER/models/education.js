"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Education.belongsTo(models.Employee, {
        foreignKey: "employee_id",
      });
    }
  }
  Education.init(
    {
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Karyawan wajib diisi" },
          notNull: { args: true, msg: "Kolom Karyawan wajib diisi" },
        },
      },
      name: DataTypes.STRING,
      level: {
        type: DataTypes.ENUM,
        values: [
          "Tk",
          "Sd",
          "Smp",
          "Sma",
          "Strata 1",
          "Strata 2",
          "Doktor",
          "Profesor",
        ],
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Deskripsi wajib diisi" },
          notNull: { args: true, msg: "Kolom Deskripsi wajib diisi" },
        },
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Diinput Oleh wajib diisi" },
          notNull: { args: true, msg: "Kolom Diinput Oleh wajib diisi" },
        },
      },
      updated_by: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Diupdate Oleh wajib diisi" },
          notNull: { args: true, msg: "Kolom Diupdate Oleh wajib diisi" },
        },
      },
    },
    {
      sequelize,
      modelName: "Education",
    }
  );
  return Education;
};
