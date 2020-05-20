import { Request, Response, NextFunction } from "express";

class AccountController {
  login(req: Request, res: Response, next: NextFunction): void {
    res.send("login");
  }
}

export const accountController = new AccountController();
