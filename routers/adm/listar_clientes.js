const express = require('express')
const DataBase = require("../../configs/DataBases")
const router = express.Router();

// Rota para lista todos os usuarios. // (incompleto*)
    router.post('/',async function(req,res){
        
        const clientes = await DataBase.knex.select('clientes.id_cliente','clientes.nome','clientes.email','endereço.cep','endereço.cidade','endereço.estado').table('clientes').innerJoin('endereço','endereço.id_cliente','clientes.id_cliente')
        res.send(clientes[0])
        console.log(clientes);
    })
//


module.exports = router    