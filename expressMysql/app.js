const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const { route } = require("./src/routes/index");

//connect Db
const { connectDb } = require("./src/configs/connectDb");

app.use(cors());

app.use(express.json());

connectDb();

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
