const {
  Employee,
  EmployeeProfile,
  EmployeeFamily,
  Education,
  sequelize,
} = require("../models");

const getAllEmployees = async (req, res, next) => {
  try {
    const data = await Employee.findAll({
      include: [
        {
          model: EmployeeProfile,
        },
        {
          model: EmployeeFamily,
        },
        {
          model: Education,
        },
      ],
    });

    res.status(200).json({
      status: true,
      message: "List of all employees",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const getEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id, {
      include: [
        {
          model: EmployeeProfile,
        },
        {
          model: EmployeeFamily,
        },
        {
          model: Education,
        },
      ],
    });

    if (employee === null) {
      return res.status(404).json({
        status: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Employee data",
      data: employee,
    });
  } catch (error) {
    next(error);
  }
};

const createNewEmployee = async (req, res, next) => {
  try {
    const {
      nik,
      name,
      is_active,
      start_date,
      end_date,
      created_by,
      updated_by,
    } = req.body;

    const newEmployee = await Employee.create({
      nik: nik,
      name: name,
      is_active: is_active,
      start_date: start_date,
      end_date: end_date,
      created_by: created_by,
      updated_by: updated_by,
    });

    res.status(201).json({
      status: true,
      message: "New employee has been added",
      data: newEmployee,
    });
  } catch (error) {
    next(error);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      nik,
      name,
      is_active,
      start_date,
      end_date,
      created_by,
      updated_by,
    } = req.body;

    const employee = await Employee.findByPk(id);

    if (employee === null) {
      return res.status(404).json({
        status: false,
        message: "Employee not found",
      });
    }

    employee.nik = nik;
    employee.name = name;
    employee.is_active = is_active;
    employee.start_date = start_date;
    employee.end_date = end_date;
    employee.created_by = created_by;
    employee.updated_by = updated_by;

    await employee.validate();
    await employee.save();

    res.status(200).json({
      status: true,
      message: "Employee has been updated",
      data: employee,
    });
  } catch (error) {
    next(error);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);

    if (employee === null) {
      return res.status(404).json({
        status: false,
        message: "Employee not found",
      });
    }

    const profile = await EmployeeProfile.findOne({
      where: {
        employee_id: id,
      },
    });

    if (profile) {
      await profile.destroy();
    }

    const families = await EmployeeFamily.findAll({
      where: {
        employee_id: id,
      },
    });

    console.log(families.length);

    for (let i = 0; i < families.length; i++) {
      const family = await EmployeeFamily.findByPk(families[i].id);
      if (family) {
        await family.destroy();
      }
    }

    // if (families) {
    //   await families.destroy();
    // }

    const educations = await Education.findAll({
      where: {
        employee_id: id,
      },
    });

    for (let i = 0; i < educations.length; i++) {
      const education = await Education.findByPk(educations[i].id);
      if (education) {
        await education.destroy();
      }
    }

    // if (educations) {
    //   await educations.destroy();
    // }

    await employee.destroy();

    res.status(200).json({
      status: true,
      message: "Employee has been deleted",
    });
  } catch (error) {
    next(error);
  }
};

const getEmployeeReport = async (req, res, next) => {
  try {
    const employees = await sequelize.query(
      "SELECT * FROM public.'Employees'",
      {
        model: Employee,
      }
    );

    console.log(employees);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeReport,
};
