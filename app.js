const express = require("express");
const User = require("./routers/UserRouter.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

app.use("/api",User);

app.get("/api", (req, res) => {
  res.send("Server is working well");
});
module.exports = app;