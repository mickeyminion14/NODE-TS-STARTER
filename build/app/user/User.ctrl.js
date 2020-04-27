"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
var messages_1 = require("../constants/messages");
exports.loginCtrl = function (req, res, next) {
    var payload = __assign({}, req.body);
    db_1.login(payload)
        .then(function (token) {
        if (!token) {
            return next(new Error(messages_1.ERROR_MESSAGES.USER_NOT_FOUND));
        }
        res.json({
            message: "Login Successfull !",
            result: null,
            token: token
        });
    })
        .catch(next);
};
exports.signupCtrl = function (req, res, next) {
    var payload = __assign({}, req.body);
    db_1.signup(payload)
        .then(function (document) {
        if (!document) {
            return next(new Error(messages_1.ERROR_MESSAGES.USER_NOT_FOUND));
        }
        res.status(200).json({
            message: "Signup Successfull",
            result: null
        });
    })
        .catch(next);
};
