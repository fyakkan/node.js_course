const express = require("express");
const app = express();
app.listen(3000, () => {
//routes
  app.use("/products/:id", function (req, res) {
    res.send("product details "+req.params.id);

  });
  app.use("/products", function (req, res) {
    res.send("products");
  });
  app.use("/", function (req, res) {
    res.send("homePage");
  });


  console.log("listening on port 3000");
})