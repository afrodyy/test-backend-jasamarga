const { Employee, Education } = require("../models");

const getEmployeeEducations = async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const educations = await Education.findAll({
      where: {
        employee_id: employeeId,
      },
    });

    if (educations === null) {
      return res.status(404).json({
        status: false,
        message: "Employee's education doesn't exist",
      });
    }

    res.status(200).json({
      status: true,
      message: "Employee's education fetched successfully",
      data: educations,
    });
  } catch (error) {
    next(error);
  }
};

const getEmployeeEducation = async (req, res, next) => {
  try {
    const { employeeId, id } = req.params;

    const education = await Education.findOne({
      where: {
        id: id,
        employee_id: employeeId,
      },
    });

    if (education === null) {
      return res.status(404).json({
        status: false,
        message: "Employee's education doesn't exist",
      });
    }

    res.status(200).json({
      status: true,
      message: "Employee's education fetched successfully",
      data: education,
    });
  } catch (error) {
    next(error);
  }
};

const createEmployeeEducation = async (req, res, next) => {
  try {
    const { employee_id, name, level, description, created_by, updated_by } =
      req.body;

    const education = await Education.create({
      employee_id: employee_id,
      name: name,
      level: level,
      description: description,
      created_by: created_by,
      updated_by: updated_by,
    });

    res.status(200).json({
      status: true,
      message: "Employee's education created successfully",
      data: education,
    });
  } catch (error) {
    next(error);
  }
};

const updateEmployeeEducation = async (req, res, next) => {
  try {
    const { id, employeeId } = req.params;
    const { name, level, description, created_by, updated_by } = req.body;

    const education = await Education.findOne({
      where: {
        id: id,
        employee_id: employeeId,
      },
    });

    if (education === null) {
      return res.status(404).json({
        status: false,
        message: "Employee's education doesn't exist",
      });
    }

    education.name = name;
    education.level = level;
    education.description = description;
    education.created_by = created_by;
    education.updated_by = updated_by;

    await education.validate();
    await education.save();

    res.status(200).json({
      status: true,
      message: "Employee's education updated successfully",
      data: education,
    });
  } catch (error) {
    next(error);
  }
};

const deleteEmployeeEducation = async (req, res, next) => {
  try {
    const { employeeId, id } = req.params;

    const education = await Education.findOne({
      where: {
        id: id,
        employee_id: employeeId,
      },
    });

    if (education === null) {
      return res.status(404).json({
        status: false,
        message: "Employee's education doesn't exist",
      });
    }

    await education.destroy();

    res.status(200).json({
      status: true,
      message: "Employee's education deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEmployeeEducations,
  getEmployeeEducation,
  createEmployeeEducation,
  updateEmployeeEducation,
  deleteEmployeeEducation,
};
