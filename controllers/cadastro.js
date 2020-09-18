const express = require('express');
const router = express.Router();
const DataBase = require("../configs/DataBases")
const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

router.post('/', async function(req,res){

    // validações - incompleto.

        const erros = []          
        
        const email = await DataBase.knex.select().table('clientes').where('email', req.body.email);
        console.log(email)
               
        if(email.length >= 1){  erros.push({mensagem: "Email Já cadastrado"})   }

        if (!req.body.cep || !req.body.email || !req.body.nome || !req.body.senha)  {  erros.push({ mensagem:"Informe os dados corretamente"  })}
                   
        if (req.body.cep.length != 8 ){   erros.push({ mensagem:"cep inválido"})    }  
                
        if(erros.length > 0){ res.send({erros: erros})}  else{
   
            


    //                
                    
    // Obitendo endereço.
        
     const cep = await axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`).then((e)=>{return e.data;})
                
    //      
    
    //  tratando possíveis erros do CEP.
     
        if (cep.erro == true) {
                
            res.send({mensagem: "Cep Inválido"})
  
        }else{    
    //

    // Encriptando senha.         
        const hash = bcrypt.hashSync(req.body.senha,10);
    // 
        
  
    // Realizando insert.

        const cliente = [{nome: req.body.nome, email: req.body.email, senha: hash}]

        const idCliente = await DataBase.knex.insert(cliente).into("clientes");
        
        if (idCliente < 1) {
        
            res.send({mensagem: "erro ao cadastrar usuario"})
        
        }else{
        
            const endereço = [{cep: cep.cep,cidade: cep.localidade,estado: cep.uf,id_Cliente: idCliente}]
                    
            const idEndereco = await DataBase.knex.insert(endereço).into("endereço");

            if (idEndereco < 1) {
                res.send({mensagem: "erro ao cadastrar endereço"})
            } else {

                const token = jwt.sign({

                    id: idCliente,
                    nome: cliente.nome,
                    email: cliente.email,
                },  DataBase.hash,{expiresIn: "1h"})

                res.send({mensagem: "Usuario cadastrado com sucesso", token: token  }) // configurar para onde será redirecionado o usuário quando for cadastrado.
            }
              
        }
    //
    }
  }
})
module.exports = router;


