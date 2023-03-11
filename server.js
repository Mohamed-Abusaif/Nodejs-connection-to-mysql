const mysql = require("mysql");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "courseschemagp",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// const sql = `insert into  intrests (intrests) values ('interest1')`
// con.query(sql);

app.get("/", (req, res) => {
  res.send("Hello from Home router!");
});

app.get("/getAllStudents", (req, res) => {
  con.connect(function (err) {
    // if (err) throw err;
    const result = con.query("SELECT * FROM student", function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(JSON.stringify(result));
    });
  });
});

app.post("/insertStudent", (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
