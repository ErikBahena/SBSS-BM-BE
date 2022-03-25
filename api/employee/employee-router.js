const router = require("express").Router();
const Employee = require("./employee-model.js");

const { restricted } = require("../auth/auth-middleware");
const {
  formatEmployeeData,
  formatUserEmployees,
} = require("../utils/index.js");

// get a employees info by employee_id

router.get("/:employee_id", restricted, (req, res, next) => {
  Employee.findById(req.params.employee_id)
    .then((employee) => res.status(200).json(formatEmployeeData(employee)))
    .catch(next);
});

// get all employees related to a user_id

router.get("/getAll/:user_id", restricted, (req, res, next) => {

  setTimeout(() => {
    Employee.getAll(req.params.user_id)
      .then((userEmployees) =>
        res.status(200).json(formatUserEmployees(userEmployees))
      )
      .catch(next);

  }, 2000)
});

// add a new employee for a user

router.post("/add", restricted, (req, res, next) => {
  Employee.addEmployee(req.body)
    .then((userEmployees) =>
      res.status(201).json(formatUserEmployees(userEmployees))
    )
    .catch(next);
});

// router.put("/:employee_id/:employee_address_id", restricted, (req, res, next) => {
//   const employeeAccount = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     phone: req.body.phone,
//   };

//   const employeeAddress = {
//     street: req.body.street,
//     city: req.body.city,
//     state: req.body.state,
//     postal_code: req.body.postal_code,
//     country: req.body.country,
//   };

//   Employee.updateEmployee(
//     req.params.employee_id,
//     req.params.employee_address_id,
//     employeeAccount,
//     employeeAddress
//   )
//     .then((updatedEmployee) => {
//       setTimeout(() => {
//         res.status(200).json(formatEmployeeData(updatedEmployee));
//       }, 1000);
//     })
//     .catch(next);
// });

module.exports = router;
