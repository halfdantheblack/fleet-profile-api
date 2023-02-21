"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = require("./config");
const mongoose_1 = require("./config/mongoose");
const server = http_1.default.createServer(config_1.app);
server.listen(config_1.envs.port);
server.on('listening', () => {
    (0, mongoose_1.Connect)();
    // RedisClient().connect();
});
