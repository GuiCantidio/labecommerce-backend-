"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const type_1 = require("./type");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
(0, database_1.getAllUsers)();
(0, database_1.createProduct)("02", "Tenos", 10, type_1.CATEGORY.CLOTHES_AND_SHOES);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("ESTÁ RODANDO, ALELUIA!!!");
});
app.get('/ping', (re, resp) => {
    resp.send('Pong!');
});
//# sourceMappingURL=index.js.map