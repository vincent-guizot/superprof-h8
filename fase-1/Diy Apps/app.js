const express = require("express");
const router = require("./routes");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(PORT, () => {
  console.log("App is running on Gorengan 2 ", PORT);
});
