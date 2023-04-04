"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.createProduct = exports.product = exports.getAllUsers = exports.createUser = exports.Tuser = void 0;
const type_1 = require("./type");
exports.Tuser = [
    {
        id: "01",
        nome: "Matilton",
        email: "marilton@gmail.com",
        senha: "654321",
        createAt: "2023-03-02 13:13:31",
    },
    {
        id: "02",
        nome: "Romario",
        email: "romario@gmail.com",
        senha: "12345",
        createAt: "2023-05-15 15:15:15",
    },
    {
        id: "03",
        nome: "Roberto",
        email: "bebeto@gmail.com",
        senha: "12345",
        createAt: "2023-06-20 20:11:12",
    },
];
function createUser(id, email, senha) {
    const newUser = { id, email, senha };
    exports.Tuser.push(newUser);
    console.log("Cadastrado realizado com sucesso");
}
exports.createUser = createUser;
createUser("04", "etevaldo@gmail.com", "galaxia123");
function getAllUsers() {
    console.log(exports.Tuser);
}
exports.getAllUsers = getAllUsers;
getAllUsers();
exports.product = [
    {
        id: "p01",
        nome: "Corretor Postural",
        preco: 80.0,
        categoria: type_1.CATEGORY.CLOTHES_AND_SHOES,
    },
    {
        id: "p02",
        nome: "Pulseira Usb",
        preco: 70.0,
        categoria: type_1.CATEGORY.ELECTRONICS,
    },
    {
        id: "p03",
        nome: "Colar",
        preco: 70.0,
        categoria: type_1.CATEGORY.ACCESSORIES,
    },
];
function createProduct(id, nome, preco, categoria) {
    const newProduct = { id, nome, preco, categoria };
    exports.product.push(newProduct);
    console.log("Produto criado com sucesso!!");
}
exports.createProduct = createProduct;
exports.purchase = [
    {
        userId: "01",
        produtoId: "p01",
        quantidade: 2,
        valorTotal: 160.0,
    },
    {
        userId: "02",
        produtoId: "p02",
        quantidade: 2,
        valorTotal: 160.0,
    },
];
//# sourceMappingURL=database.js.map