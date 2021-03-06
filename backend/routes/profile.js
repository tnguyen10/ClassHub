const express = require("express");
const router = express.Router();

const {getProfile} = require('../database/profile');

const profile = {
  name: "John Smith",
  date_of_birth: "01/01/2021",
  country: "Argentina",
  us_citizenship: "Unknown",
  address: "101 TownsBeach CA, USA",
  email: "johnsmith@email.com",
  phone_number: "(000)-000-0000",
  emergency_contact_name: "Bob Smith",
  emergency_contact_email: "bobsmith@email.com",
  emergency_contact_phone_number: "(111)-111-1111",
};

const checkValidParameters = (req, res, next) => {
  availableParameters = Object.keys(profile);
  validParameters = Object.keys(req.body).every((parameter) =>
    availableParameters.includes(parameter)
  );
  if (!validParameters) {
    return res.status(400).json({
      message: "invalid parameter",
      availableParameters: availableParameters,
    });
  }
  next();
};

router.use(checkValidParameters);

router.get("/", async (req, res) => {
  res.json(await getProfile());
});

router.put("/", function (req, res) {
  Object.entries(req.body).map(([key, value]) => {
    profile[key] = value;
  });
  res.json(profile);
});

module.exports = router;
