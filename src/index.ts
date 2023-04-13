import {
  Tuser,
  product,
  getAllUsers,
  purchase,
  createUser,
  createProduct,
} from "./database";
import { CATEGORY, TUser, createUsers, products, Tcompra } from "./type";
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
  res.status(200).send(Tuser);
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
    ? Tuser.filter((item) => item.nome.toLowerCase().includes(q.toLowerCase()))
    : Tuser;

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

  Tuser.push(novoUsario);

  res.status(201).send("cadastro realizado com sucesso");
});

app.post("/products", (req: Request, res: Response) => {
  const id: string = req.body.id;
  const nome: string = req.body.nome;
  const preco: number = req.body.preco;
  const categoria: CATEGORY = req.body.CATEGORY;

  const novoProduto: products = {
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

  res.status(201).send("Compra realizada com sucesso")
});
