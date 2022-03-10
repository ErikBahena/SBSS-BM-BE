const db = require("../../data/dbConfig");

async function addEmployee(newEmployee) {
  const user_id = newEmployee.user_id;

  const employeeInfo = {
    first_name: newEmployee.first_name,
    last_name: newEmployee.last_name,
    email: newEmployee.email,
    phone: newEmployee.phone,
    user_id,
  };
  const employeeAddress = {
    street: newEmployee.street,
    city: newEmployee.city,
    state: newEmployee.state,
    country: newEmployee.country,
    postal_code: newEmployee.postal_code,
  };

  return await db
    .transaction((trx) =>
      db("employee as e")
        .transacting(trx)
        .insert(employeeInfo)
        .returning("e.employee_id")
        .then((insertedEmployeeId) => {
          employeeAddress.employee_id = insertedEmployeeId[0];

          db("employee_address")
            .insert(employeeAddress)
            .then(trx.commit)
            .catch(trx.rollback);
        })
        .catch(trx.rollback)
    )
    .then(() => {
      return getAll(user_id);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function findById(employee_id) {
  return await db("employee as e")
    .select(
      "e.employee_id",
      "e.first_name",
      "e.last_name",
      "e.email",
      "e.photo_url",
      "e.created_at",
      "ea.employee_address_id",
      "ea.street",
      "ea.state",
      "ea.country",
      "ea.city",
      "ea.postal_code"
    )
    .where("e.employee_id", employee_id)
    .first()
    .leftJoin(
      "employee_address as ea",
      "e.employee_id",
      "ea.employee_address_id"
    );
}

async function getAll(user_id) {
  return await db("user as u")
    .select(
      "e.employee_id",
      "e.first_name",
      "e.last_name",
      "e.email",
      "e.phone",
      "e.photo_url",
      "e.created_at",

      "ea.employee_address_id",
      "ea.street",
      "ea.state",
      "ea.country",
      "ea.city",
      "ea.postal_code"
    )
    .where("e.user_id", user_id)
    .leftJoin("employee as e", "u.user_id", "e.user_id")
    .leftJoin("employee_address as ea", "e.employee_id", "ea.employee_id");
}

module.exports = { addEmployee, findById, getAll };
