const db = require("../../data/dbConfig");

async function findBy(arg1, arg2) {
  const jobs = await db("job as j")
    .select(
      "j.job_id",
      "j.user_id",
      "j.title",
      "j.description",
      "j.created_at",
      "j.client_id",
      "c.first_name as client_first_name",
      "c.phone as client_phone",
      "c.last_name as client_last_name",
      "c.email as client_email"
    )
    .where(arg1, arg2)
    .leftJoin("client as c", "j.client_id", "c.client_id");

  return await Promise.all(
    jobs.map(async (job) => {
      job.employees = await db("job_employee as je")
        .select(
          "e.first_name",
          "e.last_name",
          "e.employee_id as id",
          "e.phone",
          "e.photo_url",
          "je.job_employee_id"
        )
        .where("je.job_id", job.job_id)
        .leftJoin("employee as e", "e.employee_id", "je.employee_id");

      const allEmployees = await db("employee as e")
        .select(
          "e.first_name",
          "e.last_name",
          "e.employee_id as id",
          "e.phone",
          "e.photo_url"
        )
        .where("e.user_id", arg2);

      job.excluded_employees = allEmployees
        .map((e) => {
          const found = job.employees.find((je) => je.id === e.id);
          return found ? null : e;
        })
        .filter((el) => el !== null);

      return job;
    })
  );
}

const deleteJobEmployee = async (job_id, employee_id) => {
  return await db("job_employee as je").where({ job_id, employee_id }).del();
};

const addJobEmployee = async (job_id, employee_id) => {
  return await db("job_employee").insert({ job_id, employee_id });
};

const addJobEmployeeLabor = async (newEvent) => {
  return await db("job_employee_labor").insert(newEvent);
};

const getJobEmployeeLaborHours = async (job_employee_id) => {
  return await db("job_employee_labor as jel")
    .select(
      "jel.description",
      "jel.start",
      "jel.end",
      "jel.job_employee_labor_id"
    )
    .where("jel.job_employee_id", job_employee_id);
};

const deleteJobEmployeeLaborHours = async (job_employee_labor_id) => {
  return await db("job_employee_labor").where({ job_employee_labor_id }).del();
};

module.exports = {
  findBy,
  deleteJobEmployee,
  addJobEmployee,
  addJobEmployeeLabor,
  getJobEmployeeLaborHours,
  deleteJobEmployeeLaborHours,
};
