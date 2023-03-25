 import { Tcliente,Tproduto,Tcompra } from "./type";

 export const user: Tcliente[]= [
{   
id:"01",
email:"Usuario@gmail.com",
senha:"654321"
    
},
{
    
id:"02",
email:"Usuario@gmail.com",
senha:"12345"
    
}
 ];

 export const prudutos: Tproduto[]=[
{
    id:"p01",
    nome:"Corretor Postural",
    preco:80.00,
    categoria: "saude"
},
{
    id:"p02",
    nome:"Pulseira Usb",
    preco:70.00,
    categoria: "Tecnologia"
    
}
 ];
 
 export const purchase: Tcompra[]= [
    {
    userId:"01",
    produtoId:"p01",
    quantidade:2,
    valorTotal: 160.00
},

{
    userId:"02",
    produtoId:"p02",
    quantidade:2,
    valorTotal: 140.00
    
    }
 ]
