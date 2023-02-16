"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configEnvs = void 0;
const dotenv_1 = require("dotenv");
const configEnvs = () => {
    (0, dotenv_1.config)({ path: `.env.${process.env.PLATFORM}` });
};
exports.configEnvs = configEnvs;
