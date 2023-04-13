import { TUser, products,Tcompra,createUsers, CATEGORY } from "./type";




// export function createUser(id: string, email: string, senha: string) {
//   const newUser = {id,email,senha}  
//  Tuser.push(newUser)
//  console.log("Cadastrado realizado com sucesso");
// }

// st
export const Tuser: TUser[] = [
  {
    id: "01",
    nome:"Marilton",
    email: "marilton@gmail.com",
    senha: "654321",
    createAt: "2023-03-02 13:13:31",
  },
  {
    id: "02",
    nome:"Romario",
    email: "romario@gmail.com",
    senha: "12345",
    createAt: "2023-05-15 15:15:15",
  },
  {
    id: "03",
    nome:"Roberto",
    email: "bebeto@gmail.com",
    senha: "12345",
    createAt: "2023-06-20 20:11:12",
  },
];
export function createUser(id: string,nome:string, email: string, senha: string) {
  const newUser = {id,nome,email,senha}  
 Tuser.push(newUser)
 console.log("Cadastrado realizado com sucesso");
}

createUser("04","Etevaldo", "etevaldo@gmail.com", "galaxia123");

export function getAllUsers(){
  // console.log(Tuser)
}
getAllUsers()
// export function createUser(id: string, email: string, senha: string) {
//   user.push(id, email, senha);
//   console.log("Cadastrado realizado com sucesso");
// }
// // createUser("04", "etevaldo@gmail.com", "galaxia123");
// function getAllUsers() {
//   //   return user;
// }
// getAllUsers();
export const product: products[] = [
  {
    id: "p01",
    nome: "Corretor Postural",
    preco: 80.0,
    categoria: CATEGORY.CLOTHES_AND_SHOES,
  },
  {
    id: "p02",
    nome: "Pulseira Usb",
    preco: 70.0,
    categoria: CATEGORY.ELECTRONICS,
  },
  {
    id: "p03",
    nome: "Colar",
    preco: 70.0,
    categoria: CATEGORY.ACCESSORIES,
  },
];

export function createProduct(id:string,nome:string,preco:number,categoria:CATEGORY){
const newProduct:products ={id,nome,preco,categoria}
product.push(newProduct)
// console.log("Produto criado com sucesso!!")
}

// function createProduct(
//   id: String,
//   nome: string,
//   preco: number,
//   categoria: CATEGORY
// ) 
//   const newProduct: products = { id, nome, preco, categoria };
//   products.push;
// }

export const purchase: Tcompra[] = [
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