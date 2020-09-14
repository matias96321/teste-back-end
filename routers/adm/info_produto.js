const express = require('express')
const DataBase = require("../../configs/DataBases")
const router = express.Router();


router.get('/:id', async(req,res)=>{

    const produto = await DataBase.knex.select('produtos.id_produto','produtos.produto','produtos.preco','imagens.imagem').table('produtos').innerJoin('imagens','imagens.id_produto','produtos.id_produto').where({id_produto: req.params.id})
    
    if (produtos.length < 1) {

    res.send({mensagem: "erro ao listar produtos"})

    } else {

        const info = {

            card: produto.map(itens =>{

                return{

                    id_produto: produto.id_produto,

                    nome: produto.nome,

                    imagem: produto.imagem,

                    produto: produto.produto,

                    preco: produto.preco,
                    
                    request:{
                        descrisao:"caminho para editar produto",
                        tipo:'GET',
                        url: 'http://localhost:8080/update' + produto.id_produto
                    }
                }
            })
        }
        res.send(info)
    }
})

