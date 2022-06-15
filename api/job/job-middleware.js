// create an arrow function checks if endDateTime is after startDateTime

const isDateTimeRangeValid = (req, res, next) => {
  if (req.body.startDateTime <= req.body.endDateTime) next();
  else next({ status: 400, message: "startDateTime must be <= endDateTime" });
};

module.exports = { isDateTimeRangeValid };
