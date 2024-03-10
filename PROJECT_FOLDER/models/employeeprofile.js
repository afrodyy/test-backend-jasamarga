"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EmployeeProfile.belongsTo(models.Employee, {
        foreignKey: "employee_id",
      });
    }
  }
  EmployeeProfile.init(
    {
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Karyawan wajib diisi" },
          notNull: { args: true, msg: "Kolom Karyawan wajib diisi" },
        },
      },
      place_of_birth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["Laki-laki", "Perempuan"],
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom Jenis Kelamin wajib diisi" },
          notNull: { args: true, msg: "Kolom Jenis Kelamin wajib diisi" },
        },
      },
      is_married: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Kolom STatus Menikah wajib diisi" },
          notNull: { args: true, msg: "Kolom STatus Menikah wajib diisi" },
        },
      },
      prof_pict: {
        type: DataTypes.STRING,
        allowNull: true,
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
      modelName: "EmployeeProfile",
    }
  );
  return EmployeeProfile;
};
