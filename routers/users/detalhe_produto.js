const express = require('express');
const router = express.Router();
const DataBases = require('../configs/DataBases')

// Rota para exibir detlhes do produto para o usuários. // (incompleto*)
  router.post('/:id_produto', async(req, res) => {
    
    const produto = await DataBases.knex.select('imagens.imagem','produtos.id_produto','produtos.nome','produtos.descrisao','produto.preco').table('produtos').where('id_produto',req.param.id_produto).innerJoin('imagens','id_produto','id_produto').first()  

    if (produto.length < 1) {

      res.send({mensagem: "Produto não encontrado"})

    } else {

      res.send(produto) // redirecionar para a pagina do produto expecífico

    }
  })
//


module.exports = router;