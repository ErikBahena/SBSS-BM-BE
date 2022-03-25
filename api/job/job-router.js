const router = require("express").Router();
const Job = require("./job-model.js");

const { restricted } = require("../auth/auth-middleware");
const { formatUserJobs } = require("../utils/index.js");

router.get("/:job_id", (req, res, next) => {
  Job.findBy("j.job_id", req.params.job_id)
    .then((job) => res.status(200).json(job[0]))
    .catch(next);
});

router.get("/user-jobs/:user_id", (req, res, next) => {
  Job.findBy("j.user_id", req.params.user_id)
    .then((jobs) => {
      res.status(200).json(formatUserJobs(jobs));
    })
    .catch(next);
});

// delete an employee from a job
router.delete("/delete-employee/:job_id/:employee_id", (req, res, next) => {
  Job.deleteJobEmployee(req.params.job_id, req.params.employee_id)
    .then(() => res.status(204).json("success"))
    .catch(next);
});

// add a job employee
router.post("/add-employee/:job_id/:employee_id", (req, res, next) => {
  Job.addJobEmployee(req.params.job_id, req.params.employee_id)
    .then(() => res.status(201).json("success"))
    .catch(next);
});

router.get("/get-employee-labor/:job_employee_id", (req, res, next) => {
  Job.getJobEmployeeLaborHours(req.params.job_employee_id)
    .then((employeeLabor) => res.status(200).json({ employeeLabor }))
    .catch(next);
});

// add an labor to a job regarding an employee
router.post("/add-employee-labor", (req, res, next) => {
  Job.addJobEmployeeLabor(req.body)
    .then(() => res.status(201).json("success"))
    .catch(next);
});

module.exports = router;
