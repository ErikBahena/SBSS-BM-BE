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
    .then((jobs) => res.status(200).json(formatUserJobs(jobs)))
    .catch(next);
});

module.exports = router;
