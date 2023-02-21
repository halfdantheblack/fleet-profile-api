"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.envs = void 0;
var env_config_1 = require("./env-config");
Object.defineProperty(exports, "envs", { enumerable: true, get: function () { return env_config_1.envs; } });
var express_1 = require("./express");
Object.defineProperty(exports, "app", { enumerable: true, get: function () { return express_1.app; } });
