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
var user_schema_1 = require("../schemas/user.schema");
exports.signupValidator = function (req, res, next) {
    var payload = __assign({}, req.body);
    var error = exports.valdiate(payload, user_schema_1.userSignupSchema);
    if (error) {
        res.status(400).json({
            message: error,
            result: null
        });
        return;
    }
    next();
};
exports.loginValidator = function (req, res, next) {
    var payload = __assign({}, req.body);
    var error = exports.valdiate(payload, user_schema_1.userLoginSchema);
    if (error) {
        res.status(400).json({
            message: error,
            result: null
        });
        return;
    }
    next();
};
exports.valdiate = function (payload, schema) {
    var error = schema.validate(payload).error;
    if (error) {
        return error.details[0].message.split('"').join("");
    }
    return null;
};
