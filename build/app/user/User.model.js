"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserModel = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
}, {
    collection: "account",
    timestamps: true
});
exports.default = mongoose_1.default.model("User", UserModel);
