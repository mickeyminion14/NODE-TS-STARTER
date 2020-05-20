import { Router } from "express";
import { roomController } from "./rooms.ctrl";
import mongoose from "mongoose";
export const roomRoutes = Router();

roomRoutes.post("/createRoom", roomController.createRoom);
