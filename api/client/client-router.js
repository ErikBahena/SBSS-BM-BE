const router = require("express").Router();
const Client = require("./client-model.js");

const { restricted } = require("../auth/auth-middleware");
// const { formatClientData } = require("../utils/index.js");

router.get("/:client_id", (req, res, next) => {
  Client.findById(req.params.client_id)
    .then((client) => res.status(200).json(client))
    .catch(next);
});

// router.put("/:client_id/:client_address_id", restricted, (req, res, next) => {
//   const clientAccount = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     phone: req.body.phone,
//   };

//   const clientAddress = {
//     street: req.body.street,
//     city: req.body.city,
//     state: req.body.state,
//     postal_code: req.body.postal_code,
//     country: req.body.country,
//   };

//   Client.updateClient(
//     req.params.client_id,
//     req.params.client_address_id,
//     clientAccount,
//     clientAddress
//   )
//     .then((updatedClient) => {
//       setTimeout(() => {
//         res.status(200).json(formatClientData(updatedClient));
//       }, 1000);
//     })
//     .catch(next);
// });

module.exports = router;
