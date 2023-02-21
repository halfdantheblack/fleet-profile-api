"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/', controller_1.UserController.getUsers);
exports.userRouter.post('/', controller_1.UserController.createUser);
