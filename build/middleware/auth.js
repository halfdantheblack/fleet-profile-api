"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const jwt = require('jsonwebtoken');
const jwt_decode_1 = __importDefault(require("jwt-decode"));
app.use(body_parser_1.default.json());
app.post('/', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    if (username == 'finny' && password == '123') {
        let token = jwt.sign({ username }, 'secret', { expiresIn: '60s' });
        res.send({ token: token });
    }
    else {
        res.send("failed");
    }
});
app.post('/verifyToken', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let check = yield authorize(req.body.token);
        res.send(check);
    });
});
app.get("/get", function (req, res) {
});
function authorize(token) {
    var decoded = (0, jwt_decode_1.default)(token);
    if (decoded.username == 'finny') {
        return ("USER AUTHORIZED");
    }
    else {
        return ('USER UNAUTHORIZED');
    }
}
app.listen(3000, () => console.log(`server running on portss`));
