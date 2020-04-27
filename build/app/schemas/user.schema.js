"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("@hapi/joi"));
exports.userSignupSchema = joi_1.default.object({
    name: joi_1.default.string()
        .min(3)
        .max(25)
        .required(),
    age: joi_1.default.number().max(100),
    email: joi_1.default.string().email(),
    password: joi_1.default.string()
        .alphanum()
        .min(8)
        .max(25)
});
exports.userLoginSchema = joi_1.default.object({
    email: joi_1.default.string().email(),
    password: joi_1.default.string()
        .alphanum()
        .min(8)
        .max(25)
});
