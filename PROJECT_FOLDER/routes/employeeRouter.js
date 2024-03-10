const router = require("express").Router();
const {
  getAllEmployees,
  getEmployeeById,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeReport,
} = require("../controller/employeeController");

router.get("/employees", getAllEmployees);
router.get("/employees/:id", getEmployeeById);
router.post("/employees", createNewEmployee);
router.patch("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);
router.get("/employees-report", getEmployeeReport);

module.exports = router;
