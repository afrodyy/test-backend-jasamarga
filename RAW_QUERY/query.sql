SELECT
"Employees".id AS employee_id, "Employees".nik, "Employees".name, "Employees".is_active,
"EmployeeProfiles".gender, CONCAT(EXTRACT('YEAR' FROM AGE("EmployeeProfiles".date_of_birth)), ' Years Old'),
"Education".name AS school_name, "Education".level
FROM "Employees"
INNER JOIN "EmployeeProfiles"
ON "Employees".id = "EmployeeProfiles".employee_id
INNER JOIN "Education"
ON "Employees".id = "Education".employee_id