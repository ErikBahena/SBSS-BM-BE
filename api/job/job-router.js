const router = require("express").Router();
const Job = require("./job-model.js");

const { restricted } = require("../auth/auth-middleware");
const { formatUserJobs } = require("../utils/index.js");
const { isDateTimeRangeValid } = require("./job-middleware");

// add a job
router.post("/add", restricted, (req, res, next) => {
  Job.addJob(req.body)
    .then(() => res.status(201).json("success"))
    .catch(next);
});

// get a job by id
router.get("/:job_id", restricted, (req, res, next) => {
  Job.findBy("j.job_id", req.params.job_id)
    .then((job) => res.status(200).json(job[0]))
    .catch(next);
});

// delete a job by job_id
router.delete("/delete/:job_id", restricted, (req, res, next) => {
  Job.deleteJob(req.params.job_id)
    .then(() => res.status(204).json("success"))
    .catch(next);
});

// get all jobs related to a user
router.get("/user-jobs/:user_id", restricted, (req, res, next) => {
  Job.findBy("j.user_id", req.params.user_id)
    .then((jobs) => {
      res.status(200).json(formatUserJobs(jobs));
    })
    .catch(next);
});

// Job Employee Endpoints

// delete a job employee
router.delete(
  "/delete-employee/:job_id/:employee_id",
  restricted,
  (req, res, next) => {
    Job.deleteJobEmployee(req.params.job_id, req.params.employee_id)
      .then(() => res.status(204).json("success"))
      .catch(next);
  }
);

// add a job employee
router.post(
  "/add-employee/:job_id/:employee_id",
  restricted,
  (req, res, next) => {
    Job.addJobEmployee(req.params.job_id, req.params.employee_id)
      .then(() => res.status(201).json("success"))
      .catch(next);
  }
);

// Job_Employee_Labor Endpoints:

// add labor to a job regarding an employee
router.post("/add-employee-labor", restricted, (req, res, next) => {
  Job.addJobEmployeeLaborHours(req.body)
    .then(() => res.status(201).json("success"))
    .catch(next);
});

// update a job employees labor
router.put(
  "/edit-employee-labor/:job_employee_labor_id",
  restricted,
  (req, res, next) => {
    Job.editJobEmployeeLaborHours(req.params.job_employee_labor_id, req.body)
      .then(() => res.status(200).json("success"))
      .catch(next);
  }
);

/* get an employees labor by their job_employee_id in the job_employee_labor table

  Relation Structure:

  -Job
    -Job_Employee
      -Job_Employee_Labor
*/
router.get(
  "/get-employee-labor/:job_employee_id",
  restricted,
  (req, res, next) => {
    Job.getJobEmployeeLaborHours(req.params.job_employee_id)
      .then((employeeLabor) => res.status(200).json(employeeLabor))
      .catch(next);
  }
);

router.get(
  "/get-employee-labor-by-range/:job_employee_id",
  restricted,
  isDateTimeRangeValid,
  (req, res, next) => {
    Job.getJobEmployeeLaborHoursByRange(req.params.job_employee_id, req.body)
      .then((employeeLabor) => res.status(200).json(employeeLabor))
      .catch(next);
  }
);

router.delete(
  "/delete-job-employee-labor/:job_employee_labor_id",
  restricted,
  (req, res, next) => {
    Job.deleteJobEmployeeLaborHours(req.params.job_employee_labor_id)
      .then(() => res.status(204).json("success"))
      .catch(next);
  }
);

module.exports = router;
