const express = require("express");
const app = express();
const userRoutes = require("./routes/users");

app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.static('node_modules'));



//routes

app.use(userRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
})

