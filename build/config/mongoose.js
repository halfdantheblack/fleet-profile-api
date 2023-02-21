"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_config_1 = require("./env-config");
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.set("strictQuery", false);
// mongoose.set('debug', env === 'development');
mongoose_1.default.connection.on('error', (err) => {
    console.log("DB Connection err");
    console.log(err);
});
mongoose_1.default.connection.on('connected', () => {
    console.log("DB connected");
});
const Connect = () => {
    if (env_config_1.envs.mongoUri) {
        mongoose_1.default.connect(env_config_1.envs.mongoUri.toString());
        return mongoose_1.default.Connection;
    }
    return null;
};
exports.Connect = Connect;
