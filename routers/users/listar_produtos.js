const express = require('express')
const router = express.Router();
const DataBase = require('../../configs/DataBases')


// Rota para listar produtos da home. // (incompleto*)


    router.get('/', async(req,res)=>{

        const produtos = await DataBase.knex.select('produtos.id_produto','produtos.produto','produtos.preco','imagens.imagem').table('produtos').innerJoin('imagens','imagens.id_produto','produtos.id_produto')
        
        if (produtos.length < 1) {

        res.send({mensagem: "erro ao listar produtos"})

        } else {

            const itens = {

                card: produtos.map(iten =>{

                    return{

                        id_produto: produtos.id_produto,

                        nome: produtos.nome,

                        imagem: produtos.imagem,

                        produto: produtos.produto,

                        preco: produtos.preco,
                        
                        request:{
                            tipo:'GET',
                            url: 'http://localhost:8080/produto' + produtos.id_produto
                        }
                    }
                })
            }
            res.send(produtos)
        }
    })
//



module.exports = router;