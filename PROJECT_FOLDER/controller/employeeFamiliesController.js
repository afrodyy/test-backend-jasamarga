const { Employee, EmployeeFamily } = require("../models");

const getEmployeeFamilies = async (req, res, next) => {
  try {
    const { id } = req.params;
    const families = await EmployeeFamily.findAll({
      where: {
        employee_id: id,
      },
      include: [
        {
          model: Employee,
        },
      ],
    });

    if (families.length < 1) {
      return res.status(404).json({
        status: false,
        message: "Employee's family not found or does not exist",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Employee's families data",
      data: families,
    });
  } catch (error) {
    next(error);
  }
};

const createNewEmployeeFamily = async (req, res, next) => {
  try {
    const {
      employee_id,
      name,
      identifier,
      job,
      place_of_birth,
      date_of_birth,
      religion,
      is_life,
      is_divorced,
      relation_status,
      created_by,
      updated_by,
    } = req.body;

    const newEmployeeFamily = await EmployeeFamily.create({
      employee_id: employee_id,
      name: name,
      identifier: identifier,
      job: job,
      place_of_birth: place_of_birth,
      date_of_birth: date_of_birth,
      religion: religion,
      is_life: is_life,
      is_divorced: is_divorced,
      relation_status: relation_status,
      created_by: created_by,
      updated_by: updated_by,
    });

    res.status(201).json({
      status: true,
      message: "New employee's family has been added",
      data: newEmployeeFamily,
    });
  } catch (error) {
    next(error);
  }
};

const updateEmployeeFamily = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeFamily = await EmployeeFamily.findByPk(id);

    if (employeeFamily === null) {
      return res.status(404).json({
        status: false,
        message: "Employee's family not found or does not exist",
      });
    }

    const {
      employee_id,
      name,
      identifier,
      job,
      place_of_birth,
      date_of_birth,
      religion,
      is_life,
      is_divorced,
      relation_status,
      created_by,
      updated_by,
    } = req.body;

    employeeFamily.employee_id = employee_id;
    employeeFamily.name = name;
    employeeFamily.identifier = identifier;
    employeeFamily.job = job;
    employeeFamily.place_of_birth = place_of_birth;
    employeeFamily.date_of_birth = date_of_birth;
    employeeFamily.religion = religion;
    employeeFamily.is_life = is_life;
    employeeFamily.is_divorced = is_divorced;
    employeeFamily.relation_status = relation_status;
    employeeFamily.created_by = created_by;
    employeeFamily.updated_by = updated_by;

    await employeeFamily.validate();
    await employeeFamily.save();

    res.status(200).json({
      status: true,
      message: "Employee's family has been updated",
      data: employeeFamily,
    });
  } catch (error) {
    next(error);
  }
};

const deleteEmployeeFamily = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeFamily = await EmployeeFamily.findByPk(id);

    if (employeeFamily === null) {
      return res.status(404).json({
        status: false,
        message: "Employee's family not found or does not exist",
      });
    }

    await employeeFamily.destroy();

    res.status(200).json({
      status: true,
      message: "Employee's family has been deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEmployeeFamilies,
  createNewEmployeeFamily,
  updateEmployeeFamily,
  deleteEmployeeFamily,
};
