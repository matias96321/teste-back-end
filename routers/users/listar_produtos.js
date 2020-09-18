const express = require('express')
const router = express.Router();
const DataBase = require('../../configs/DataBases')


// Rota para listar produtos da home. // (incompleto*)


    router.get('/', async(req,res)=>{

        const produtos = await DataBase.knex.select('*').table('produtos')
        console.log(produtos)
        if (produtos.length <= 1) {

        res.send({mensagem: "erro ao listar produtos"})

        } else {

            const itens = {

                card: produtos.map(iten =>{

                    return({

                        id_produto: produtos.id_produto,

                        nome: produtos.nome,

                        imagem: produtos.imagem,

                        produto: produtos.produto,

                        preco: produtos.preco,
                        
                        request:{
                            tipo:'GET',
                            url: 'http://localhost:8080/produto' + produtos.id_produto
                        }
                    });
                }
                )
            }
            res.json({produtos})
        }
    })
//



module.exports = router;