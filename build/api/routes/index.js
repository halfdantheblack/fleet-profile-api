"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const user_1 = require("./user/user");
exports.route = (0, express_1.Router)();
exports.route.use('/user', user_1.userRouter);
