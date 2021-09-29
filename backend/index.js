const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

const userInfos = {
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

app.get("/api/user", (req, res) => {
  res.json([userInfos]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
