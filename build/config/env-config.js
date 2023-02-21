"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: `.env.${process.env.PLATFORM}` });
exports.envs = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URL
};
