const router = require("express").Router();
const employeeRouter = require("./employeeRouter");
const employeeProfileRouter = require("./employeeProfileRouter");
const employeeFamiliesRouter = require("./employeeFamiliesRouter");
const employeeEducationRouter = require("./employeeEducationRouter");

router.use("/api/v1", employeeRouter);
router.use("/api/v1", employeeProfileRouter);
router.use("/api/v1", employeeFamiliesRouter);
router.use("/api/v1", employeeEducationRouter);

module.exports = router;
