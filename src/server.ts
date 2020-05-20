import express, { Request, Response } from "express";
import { accountRoutes } from "./app/api/account/account.routes";
import socket, { Socket } from "socket.io";
import { roomRoutes } from "./app/api/rooms/rooms.route";
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
app.use("/rooms", roomRoutes);

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

const server = http.createServer(app);
const io = socket.listen(server);

io.sockets.on("connection", (socket: Socket) => {
  console.log("Connected " + socket.id);

  socket.on("join", function (data: any) {
    socket.join(data.room);
    console.log("new user joined" + data.room);
    socket.broadcast.to(data.room).emit("new user joined", data);
  });

  socket.on("new-message", (message) => {
    console.log(message);
    io.emit(message);
  });
});
