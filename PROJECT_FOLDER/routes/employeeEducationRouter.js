const router = require("express").Router();
const {
  getEmployeeEducations,
  getEmployeeEducation,
  createEmployeeEducation,
  updateEmployeeEducation,
  deleteEmployeeEducation,
} = require("../controller/employeeEducation");

router.get("/education/:employeeId", getEmployeeEducations);
router.get("/education/:employeeId/:id", getEmployeeEducation);
router.post("/education", createEmployeeEducation);
router.patch("/education/:employeeId/:id", updateEmployeeEducation);
router.delete("/education/:employeeId/:id", deleteEmployeeEducation);

module.exports = router;
