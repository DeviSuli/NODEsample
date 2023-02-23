const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const path = require("path");

app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/root"));

app.all("*", (req, res) => {
  res.status(404);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
