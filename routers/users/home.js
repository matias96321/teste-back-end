const express = require('express')
const router = express.Router();
const DataBase = require('../../configs/DataBases')


// Rota para listar produtos da home. // (incompleto*)


router.get('/', async(req,res)=>{

    const produtos = await DataBase.knex.select('*').table('produtos') // falta configurar produtos com estoque 0.
    
    if (produtos.length < 1) {

        res.send({mensagem: "erro ao listar produtos"})

    }else {

        const itens = {

            card: produtos.map(produto =>{

                return{

                    id_produto: produto.id_produto,

                    imagem: produto.img,

                    produto: produto.produto,

                    preco: produto.preco,
                    
                    request_produto:{
                        tipo:'GET',
                        url: 'http://localhost:8080/detalheProduto/' + produto.id_produto
                    }
                }
            })
        }
        res.render('users/home',{produtos: itens.card})
        
    }
})
//



module.exports = router;