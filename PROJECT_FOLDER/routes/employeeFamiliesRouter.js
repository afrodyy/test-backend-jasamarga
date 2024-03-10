const router = require("express").Router();
const {
  getEmployeeFamilies,
  createNewEmployeeFamily,
  updateEmployeeFamily,
  deleteEmployeeFamily,
} = require("../controller/employeeFamiliesController");

router.get("/families/:id", getEmployeeFamilies);
router.post("/families", createNewEmployeeFamily);
router.patch("/families/:id", updateEmployeeFamily);
router.delete("/families/:id", deleteEmployeeFamily);

module.exports = router;
