import { Request, Response, NextFunction } from "express";

const roomArr: Array<any> = [];
class RoomController {
  createRoom(req: Request, res: Response, next: NextFunction) {
    let roomName = req.body.roomName;
    roomArr.push(roomName);

    res.json({ status: "room created", roomArr: roomArr });
  }
}

export const roomController = new RoomController();
