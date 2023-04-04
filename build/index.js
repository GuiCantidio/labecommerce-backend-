"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const type_1 = require("./type");
(0, database_1.getAllUsers)();
(0, database_1.createProduct)("02", "Tenos", 10, type_1.CATEGORY.CLOTHES_AND_SHOES);
//# sourceMappingURL=index.js.map