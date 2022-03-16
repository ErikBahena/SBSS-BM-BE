exports.seed = function (knex) {
  return knex("job_employee").insert([
    {
      job_id: 1,
      employee_id: 1,
    },
    {
      job_id: 1,
      employee_id: 2,
    },
    {
      job_id: 2,
      employee_id: 3,
    },
    {
      job_id: 2,
      employee_id: 4,
    },
    {
      job_id: 3,
      employee_id: 5,
    },
  ]);
};
