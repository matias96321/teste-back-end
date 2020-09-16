const express = require('express')
const DataBase = require("../../configs/DataBases")
const router = express.Router();


router.get('/:id', async(req,res)=>{

    const produto = await DataBase.knex.select().table('produtos').where('id_produto',req.params.id) //.innerJoin('imagens','imagens.id_produto','produtos.id_produto').where({id_produto: req.params.id})
    
    if (produto.length < 1) {

    res.send({mensagem: "erro ao listar produtos"})

    } else {
 
        const info = {

            card: produto.map(produto =>{

                return{

                    id_produto: produto.id_produto,

                    nome: produto.nome,

                    img: produto.img,

                    produto: produto.produto,

                    descrisao: produto.descrisao, 
                    
                    preco: produto.preco,
                    
                    request_editar:{
                        descrisao:"caminho para editar produto",
                        tipo:'GET',
                        url: 'http://localhost:8080/editar/' + produto.id_produto
                    }
                }
            })
        } 
        res.render('adm/info',{info:info.card})
    }
})



router.get('/cliente/:id', async(req,res)=>{
    
    const clientes = await DataBase.knex.select().table('clientes').where('id_produto',req.params.id) //.innerJoin('imagens','imagens.id_produto','produtos.id_produto').where({id_produto: req.params.id})
    
    if (clientes.length < 1) {

    res.send({mensagem: "erro ao listar produtos"})

}
})



module.exports = router;