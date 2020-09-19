const express = require('express');
const router = express.Router();
const DataBase = require('../../configs/DataBases')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

router.post('/', async (req,res)=>{
  const {nome,email,senha,documento,img} = req.body;

  // Validar
  const email1 = await DataBase.knex.select().table('admin').where('email', req.body.email);
        console.log(email1)
               
        if(email1.length >= 1){  res.status(401).json({mensagem: "Email Já cadastrado"})   }

  // Encriptar a senha.         
  const hash = bcrypt.hashSync(senha,10);

  // Realizar Insert
  const objAdmin = [{nome: nome,email: email,senha: hash,documento: documento,img:img}]

  try{
   const resp = await DataBase.knex.insert(objAdmin).into("admin")

   if(resp < 1){
     res.send({mensagem: "erro ao cadastrar adm"})
   }else{
        const token = jwt.sign({
        nome: objAdmin.nome,
        email: objAdmin.email,
      },DataBase.hash,{expiresIn: "1h"})

        res.send({mensagem: "Usuario cadastrado com sucesso", token: token  })
   }
    
  }catch(error){
    console.log(error);
  }

})



module.exports = router;