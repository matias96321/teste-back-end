const express = require('express');
const router = express.Router();
const DataBase = require("../../configs/DataBases")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

router.post('/', async (req,res)=>{

  const data = await DataBase.knex.select().table('admin').where('email',req.body.email).first()

  if(data === undefined){
    res.status(401).send({mensagem:'usuario não cadastrado'})
    console.log('erro!')
  }else{

  const {nome,email} = data;
        if (!data) {

            res.send({mensagem: "Email não cadastrado"})
        
        } else {

            const batem =  await bcrypt.compare(req.body.senha,data.senha)

        if (!batem) {
            
            res.status(401).send({mensagem: "Senha Inválida"})
            
        } else {
                        
            const token = jwt.sign({
                id: data.id,
                nome: data.nome,
                email: data.email,
                img: data.img
            },  DataBase.hash,
            {   expiresIn: "1h"   })

            res.json({
                usuario:{nome,email},
                mensagem:"autenticado",
                token: token
            })  
        }} 

      }
  
})


module.exports = router;