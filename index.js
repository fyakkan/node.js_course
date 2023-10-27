const express = require("express");
const app = express();

app.set("view engine","ejs");

  //routes
  app.use("/products/:id", function (req, res) {
    res.render("product-details");

  });
  app.use("/products", function (req, res) {
    res.render("products");
  });
  app.use("/", function (req, res) {
    res.render("index");
  });

  app.listen(3000, () => {
    console.log("listening on port 3000");
  })

