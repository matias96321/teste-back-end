const express = require('express')
const DataBase = require("../../configs/DataBases")
const router = express.Router();


router.get('/:id', async(req,res)=>{

    const produto = await DataBase.knex.select().table('produtos') //.innerJoin('imagens','imagens.id_produto','produtos.id_produto').where({id_produto: req.params.id})
    
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

                    preco: produto.preco,
                    
                    request:{
                        descrisao:"caminho para editar produto",
                        tipo:'GET',
                        url: 'http://localhost:8080/update/' + produto.id_produto
                    }
                }
            })
        }
        res.send(info)
    }
})

module.exports = router;