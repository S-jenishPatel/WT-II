const express = require("express");

const app = express();

app.use("/static", express.static("./public"));

app.get("/student/api", (req, res) => {
  res.send("Hello World");
});
app.get("/student", (req, res) => {
  res.send("Hello World");
});
app.get("/api/student", (req, res) => {
  res.send("Hello World");
});
app.get("/student/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(8000, () => {
  console.log("Server Stated at port 8000");
});
