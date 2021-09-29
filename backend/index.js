const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const profileRoutes = require('./routes/profile')

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.use("/api/profile", profileRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
