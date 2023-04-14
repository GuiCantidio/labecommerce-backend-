import {
  user,
  product,
  getAllUsers,
  purchase,
  createUser,
  createProduct,
} from "./database";
import { CATEGORY, TUser, createUsers, Tproducts, Tcompra } from "./type";
import express, { Request, Response } from "express";
import cors from "cors";
// //  console.log(Tcom)
//console.log(pruduct)
//   console.log(Tuser)

getAllUsers();
createProduct("02", "Tenos", 10, CATEGORY.CLOTHES_AND_SHOES);

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("ESTÁ RODANDO, ALELUIA!!!");
});
app.get("/ping", (re: Request, resp: Response) => {
  resp.send("Pong!");
});

app.get("/usuarios", (req: Request, res: Response) => {
  res.status(200).send(user);
});

app.get("/produtos", (req: Request, res: Response) => {
  res.status(200).send(product);
});

app.get("/produtos/pesquisa", (req: Request, res: Response) => {
  const q = req.query.q as string;

  //   const result = Tuser.filter((item) =>
  //     item.nome.toLowerCase().includes(q.toLowerCase())
  //   );
  const result = q
    ? user.filter((item) => item.nome.toLowerCase().includes(q.toLowerCase()))
    : user;

  res.status(200).send(result);
});

app.post("/users", (req: Request, res: Response) => {
  const id: string = req.body.id;
  const email: string = req.body.email;
  const senha: string = req.body.senha;

  const novoUsario: createUsers = {
    id,
    email,
    senha,
  };

  user.push(novoUsario);

  res.status(201);
});

app.post("/products", (req: Request, res: Response) => {
  const id: string = req.body.id;
  const nome: string = req.body.nome;
  const preco: number = req.body.preco;
  const categoria: CATEGORY = req.body.CATEGORY;

  const novoProduto: Tproducts = {
    id,
    nome,
    preco,
    categoria,
  };
  product.push(novoProduto);

  res.status(201).send("produto cadastrado com sucesso");
});

app.post("/purchase", (req: Request, res: Response) => {
  const userId: string = req.body.id;
  const produtoId: string = req.body.produtoId;
  const quantidade: number = req.body.quantidade;
  const valorTotal: number = req.body.valorTotal;

  const NovaCompra: Tcompra = {
    userId,
    produtoId,
    quantidade,
    valorTotal,
  };
  purchase.push(NovaCompra);

  res.status(201).send("Compra realizada com sucesso");
});
//Aprofundamento Apis_express
//   Vamos continuar criando endpoints para automatizar a manipulação dos dados do arquivo database.ts. Por enquanto não se preocupe em validar as entradas, foque no caso de sucesso (caminho feliz).
//ex01 chamar usuario e produto
app.get("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const result: Tproducts = product.find((products) => products.id === id);

  res.status(200).send(result);
});
//chamando id de usuario e compra no mesmo array
app.get("/users/:id/purchases", (req: Request, res: Response) => {
  const userId: string = req.params.id;

  const result: Tcompra[] = purchase.filter((item) => item.userId === userId);
  res.status(200).send(result);
});
//ex02//delete users by id
app.delete("/users/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const index = user.findIndex((users) => users.id === id);

  if (index >= 0) {
    user.splice(index, 1);
  }
  res.status(200).send("Usuário apagado com sucesso !!");
});
// Delete Product by id

app.delete("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const index = product.findIndex((products) => products.id === id);

  if (index >= 0) {
    user.splice(index, 1);
  }
  res.status(200).send("Produto apagado com sucesso");
});
//ex3
//Edit User by id

app.put("/users/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const newEmail = req.body as string;
  const newPassword = req.body.senha as string;

  const result: TUser = user.find((users) => users.id === id);

  if (result) {
    result.email = newEmail;
    result.senha = newPassword;
  }

  res.status(200).send("Cadastro atualizado com sucesso!!");
});

// Edit Product by id

app.put("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const newName = req.body.nome as string
  const newPrice = req.body.preco as number
  const newCategory = req.body.CATEGORY as CATEGORY

const result: Tproducts = product.find((products)=>products.id === id)

  if(result){
    result.nome=newName
    result.preco=newPrice
    result.categoria=newCategory
  }
  res.status(200).send('Produto Atualizado com sucesso!!')
});

//   name (parâmetro opcional)
// price (parâmetro opcional)
// category (parâmetro opcional)
// response
// status 200
// "Produto atualizado com sucesso"
