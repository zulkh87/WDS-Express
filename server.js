const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.status(500).json({ message: "Error" });
  // res.json({ message: "Error" });
  res.render("index", { text: "World" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
