const { Employee, EmployeeProfile } = require("../models");

const getProfileByEmployeeId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const profile = await EmployeeProfile.findOne({
      where: {
        employee_id: id,
      },
      include: [
        {
          model: Employee,
        },
      ],
    });

    if (profile === null) {
      return res.status(404).json({
        status: false,
        message: "Employee's Profile not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Employee Profile data",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

const createNewEmployeeProfile = async (req, res, next) => {
  try {
    const {
      employee_id,
      place_of_birth,
      date_of_birth,
      gender,
      is_married,
      prof_pict,
      created_by,
      updated_by,
    } = req.body;

    const newEmployeeProfile = await EmployeeProfile.create({
      employee_id: employee_id,
      place_of_birth: place_of_birth,
      date_of_birth: date_of_birth,
      gender: gender,
      is_married: is_married,
      prof_pict: prof_pict,
      created_by: created_by,
      updated_by: updated_by,
    });

    res.status(201).json({
      status: true,
      message: "New employee's profile has been added",
      data: newEmployeeProfile,
    });
  } catch (error) {
    next(error);
  }
};

const updateEmployeeProfile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      employee_id,
      place_of_birth,
      date_of_birth,
      gender,
      is_married,
      prof_pict,
      created_by,
      updated_by,
    } = req.body;

    const profile = await EmployeeProfile.findOne({
      where: {
        employee_id: id,
      },
    });

    if (profile === null) {
      return res.status(404).json({
        status: false,
        message: "Employee not found",
      });
    }

    profile.employee_id = employee_id;
    profile.place_of_birth = place_of_birth;
    profile.date_of_birth = date_of_birth;
    profile.gender = gender;
    profile.is_married = is_married;
    profile.prof_pict = prof_pict;
    profile.created_by = created_by;
    profile.updated_by = updated_by;

    await profile.validate();
    await profile.save();

    res.status(200).json({
      status: true,
      message: "Employee's profile has been updated",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

const deleteEmployeeProfile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const profile = await EmployeeProfile.findOne({
      where: {
        employee_id: id,
      },
    });

    if (profile === null) {
      return res.status(404).json({
        status: false,
        message: "Employee's profile not found",
      });
    }

    await profile.destroy();

    res.status(200).json({
      status: true,
      message: "Employee's profile has been deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfileByEmployeeId,
  createNewEmployeeProfile,
  updateEmployeeProfile,
  deleteEmployeeProfile,
};
