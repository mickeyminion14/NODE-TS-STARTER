import { Router } from "express";
import { accountController } from "./account.ctrl";

export const accountRoutes = Router();

accountRoutes.get("/login", accountController.login);
