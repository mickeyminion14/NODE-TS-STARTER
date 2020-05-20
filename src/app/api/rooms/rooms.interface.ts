import { Document } from "mongoose";

export interface IRoom {
  roomName: string;
}

export interface IRoomDocument extends IRoom, Document {}
