const express = require('express');
const router = express.Router();
const DataBases = require('../../configs/DataBases');

// Rota para exibir detlhes do produto para o usuários. // (incompleto*)
  router.get('/:id_produto', async(req, res) => {
   
    const {id_produto} = req.params;
     
        const produto = await DataBases.knex.select().where('id_produto',id_produto).table('produtos') 
        console.log(produto);
    if (produto.length < 1) {

      res.send({mensagem: "Produto não encontrado"})

    } else {
      
        const detalhe = {

            card: produto.map(produto =>{

                return({

                    id_produto: produto.id_produto,
                    
                    img: produto.img,

                    produto: produto.produto,

                    descrisao: produto.descrisao, 
                    
                    preco: produto.preco,
                    
                    request_editar:{
                        descrisao:"caminho para editar produto",
                        tipo:'GET',
                        url: 'http://localhost:8080/addpedido/' + produto.id_produto // falta configurar

                    }
                })
            })
        } 
        res.render('users/detalheProduto',{detalhe: detalhe.card})
        
    }
})
//


module.exports = router;