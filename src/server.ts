import express, { Request, Response } from "express";
import { accountRoutes } from "./app/api/account/account.routes";
import mongoose from "mongoose";
import http from "http";
var cors = require("cors");

const app = express();

const URL =
  "mongodb://sarthak:12345sarthak@ds163182.mlab.com:63182/polling-app";

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

app.use("/account", accountRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Not Found !!",
  });
});

mongoose.connect(
  URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    app.listen(PORT, () => {
      console.log("server running on port " + PORT);
    });
  }
);
