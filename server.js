const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const path = require("path");

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
