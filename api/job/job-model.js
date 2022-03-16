const db = require("../../data/dbConfig");

async function findBy(arg1, arg2) {
  return await db("job as j")
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
}

module.exports = { findBy };
