require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const taskRouter = require("./routes/task.routes");

app.use(taskRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
