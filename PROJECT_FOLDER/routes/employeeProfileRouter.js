const router = require("express").Router();
const {
  getProfileByEmployeeId,
  createNewEmployeeProfile,
  updateEmployeeProfile,
  deleteEmployeeProfile,
} = require("../controller/employeeProfileController");

router.get("/profile/:id", getProfileByEmployeeId);
router.post("/profile", createNewEmployeeProfile);
router.patch("/profile/:id", updateEmployeeProfile);
router.delete("/profile/:id", deleteEmployeeProfile);

module.exports = router;
