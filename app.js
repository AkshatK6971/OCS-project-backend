const express = require("express");
const cors = require("cors");
const app = express();
const path = require("node:path");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});