const {request,response} = require('express')
const DataBase = require("../configs/DataBases")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { knex } = require('../configs/DataBases');

module.exports = {

    async LoginClient(Request = request,Response = response) {

        const data = await DataBase.knex.select().table('clientes').where('email',Request.body.email).first()
        const endereco = await DataBase.knex.select().table('endereço').where('id_cliente',data.id_cliente).first()
        
        const {nome,email,img} = data;
        
        if (!data) {

            Response.send({mensagem: "Email não cadastrado"})
        
        } else {

                const batem =  await bcrypt.compare(Request.body.senha,data.senha)

            if (!batem) {
                
                Response.send({mensagem: "Senha Inválida"})
                
            } else {
                
                const carrinho =  await DataBase.knex('carrinhos').select('id').where('id_cliente',data.id_cliente).first()
                
                console.log(carrinho);

                const token = jwt.sign({
                    id: data.id_cliente,
                    nome: data.nome,
                    email: data.email,
                    },  DataBase.hash,
                {   expiresIn: "1h"   })

                Response.status(200).json({
                    usuario:{nome,email,carrinho: carrinho.id,img:`http://localhost:8080/uploads/${img}`,endereco},
                    mensagem:"autenticado",
                    token: token
                })  
            } 
        }
    },

    async LoginAdmin(Request = request,Response = response){
  
        const data = await DataBase.knex.select().table('admin').where('email',Request.body.email).first()

            if(data === undefined){
        
                Response.status(401).send({mensagem:'usuario não cadastrado'})
            
            }else{

                const {nome,email} = data;
                
                if (!data) {

                    Response.send({mensagem: "Email não cadastrado"})
                
                } else {

                    const batem =  await bcrypt.compare(Request.body.senha,data.senha)

                if (!batem) {
                    
                    Response.status(401).send({mensagem: "Senha Inválida"})
                    
                } else {

                    
                    const token = jwt.sign({
                        id: data.id,
                        nome: data.nome,
                        email: data.email,
                        img: data.img,
                        },  DataBase.hash,
                    {   expiresIn: "1h"   })

                    Response.json({
                        usuario:{nome,email},
                        mensagem:"autenticado",
                        token: token
                    })  
                }
            } 
        }
    }
}