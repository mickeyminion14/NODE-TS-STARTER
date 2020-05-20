import { Schema, model, Model } from "mongoose";
import { IRoomDocument } from "./rooms.interface";

const RoomSchema = new Schema(
  {
    roomName: {
      unique: true,
      minlength: 3,
      maxlength: 25,
      type: String,
    },
  },
  {
    collection: "rooms",
    timestamps: true,
  }
);

export const RoomModel: Model<IRoomDocument> = model("rooms", RoomSchema);
