const express = require("express");
const morgan = require("morgan");

const videoRouter = require("./routes/videoRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json({ limit: "10kb" }));

app.use("/api/videos", videoRouter);

module.exports = app;
