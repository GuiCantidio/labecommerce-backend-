

export type TUser ={
   id: string,
   nome?:string,
   email:string,
   senha:string,
   createAt?:string
};


export type createUsers ={
  id: string,
  email:string,
  senha: string
}

export type  products={
   id: string,
  nome:string,
   preco:number,
  categoria:CATEGORY
};

export type Tcompra={
  userId: string,
  produtoId: string,
  quantidade:number,
  valorTotal:number
}
export enum CATEGORY{
  ACCESSORIES = "Acessórios",
  CLOTHES_AND_SHOES = "Roupas e calçados",
  ELECTRONICS = "Eletrônicos",

}




// export type Tcliente ={
//     id: string,
//     email:string,
//     senha:string,
// }

// export type Tproduto ={
//     id: string,
//     nome:string,
//     preco:number,
//     categoria:string
// };

// export type Tcompra ={
//     userId: string,
//     produtoId: string,
//     quantidade:number,
//     valorTotal: number
// }

// export type TUser ={
//     id: string,
//     nome?:string,
//     email:string,
//     senha:string,
//     createAt?:string
// };


// export type createUsers ={
//    id: string,
//    email:string,
//    senha: string
// }

// export type  products={
//     id: string,
//    nome:string,
//     preco:number,
//    categoria:CATEGORY
// };

// export type Tcompra ={
//    userId: string,
//    produtoId: string,
//    quantidade:number,
//    valorTotal:number
// }
// export enum CATEGORY{
//    ACCESSORIES = "Acessórios",
//    CLOTHES_AND_SHOES = "Roupas e calçados",
//    ELECTRONICS = "Eletrônicos"
// }