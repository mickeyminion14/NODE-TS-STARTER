"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var User_ctrl_1 = require("./User.ctrl");
var valdiate_1 = require("../validators/valdiate");
var messages_1 = require("../constants/messages");
exports.userRoutes = express_1.default();
exports.userRoutes.post("/login", valdiate_1.loginValidator, User_ctrl_1.loginCtrl);
exports.userRoutes.post("/signup", valdiate_1.signupValidator, User_ctrl_1.signupCtrl);
exports.userRoutes.use(function (error, req, res, next) {
    if (error.code == 11000 && error.name == "MongoError") {
        res.status(400).json({
            message: messages_1.ERROR_MESSAGES.EMAIL_EXITS
        });
        return;
    }
    res.status(400).json({
        message: error.message
    });
});
