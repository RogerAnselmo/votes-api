"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var PORT = process.env.PORT;
app.listen(PORT, function () { return console.log("server listenin on PORT =".concat(PORT)); });
