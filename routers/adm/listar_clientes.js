const express = require('express')
const DataBase = require("../../configs/DataBases")
const router = express.Router();

// Rota para lista todos os usuarios. // (incompleto*)
    router.get('/',async(req,res)=>{
        
        const query_clientes = await DataBase.knex.select('clientes.id_cliente','clientes.nome','clientes.email','endereço.cep','endereço.cidade','endereço.estado').table('clientes').innerJoin('endereço','endereço.id_cliente','clientes.id_cliente')

        const clientes = query_clientes.map(cliente =>{

            return{
               
                
                    id_cliente:	cliente.id_cliente,
                    nome:	cliente.nome,
                    senha:  cliente.senha,
                    email:	cliente.email,
                    cep:	cliente.cep,
                    cidade:	cliente.cidade,
                    estado:	cliente.estado,

                    // request_info_cliente: { tipo: "GET", decrisao: "rota para ter detalhe do cliente/usuario", url:`http://localhost:8080/info/cliente/${cliente.id_cliente}`}
                    
                    
            }
        })
        return res.json({clientes:clientes});
        
    })
//

module.exports = router;