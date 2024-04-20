const express = require("express");
const cors = require("cors");
const http = require("http");
const TaskRoutes = require("./routes/TaskRoutes.js");

const app = express();
const server = http.createServer(app);
const db = require("./models");

app.use(express.json());
app.use(cors());

app.use("/api/tasks", TaskRoutes);

const PORT = 8000;
db.sequelize.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Connected!");
  });
});
