const express = require('express')
const router = express.Router()
const DataBase = require("../configs/DataBases")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


    router.post('/', async function (req, res) {

        const data = await DataBase.knex.select().table('clientes').where('email',req.body.email).first()
       
        if (!data) {

            res.send({mensagem: "Email não cadastrado"})
        
        } else {

            const batem =  await bcrypt.compare(req.body.senha,data.senha)

        if (!batem) {
            
            res.send({mensagem: "Senha Inválida"})
            
        } else {
                        
            const token = jwt.sign({
                id: data.id_cliente,
                nome: data.nome,
                email: data.email,
            },  DataBase.hash,
            {   expiresIn: "1h"   })

            res.send({mensagem: "autenticado", token: token}) // Redirecionar usuario para página. // (incompleto*)  
            
        }} 
    })






    module.exports = router;
