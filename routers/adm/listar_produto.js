const express = require('express');
const router = express.Router();
const DataBase = require("../../configs/DataBases")


router.get('/', async(req,res)=>{

    const produtos = await DataBase.knex.select('produtos.id_produto','produtos.produto','produtos.preco','produtos.img').table('produtos') //.innerJoin('imagens','imagens.id_produto','produtos.id_produto')
    
    if (produtos.length < 1) {

    res.send({mensagem: "erro ao listar produtos"})

    } else {

        const itens = {

            card: produtos.map(produtos =>{

                return{

                    id_produto: produtos.id_produto,

                    nome: produtos.nome,

                    imagem: produtos.imagem,

                    produto: produtos.produto,

                    preco: produtos.preco,

                    img: produtos.img,
                    
                    request:{
                        tipo:'GET',
                        url: 'http://localhost:8080/info/' + produtos.id_produto
                    }
                }
            })
        }
        res.send(itens)
    }
})








module.exports = router;    