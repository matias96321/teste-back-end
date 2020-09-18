const express = require('express');
const router = express.Router();
const DataBases = require('../../configs/DataBases');

// Rota para exibir detlhes do produto para o usuários. // (incompleto*)
  router.get('/produto/:id_produto', async(req, res) => {
    const {id_produto} = req.params;
    console.log(id_produto)
    const produto = await DataBases.knex.select('*').where('id_produto',id_produto).table('produtos').first()  

    if (produto.length < 1) {

      res.send({mensagem: "Produto não encontrado"})

    } else {

      return res.send(produto) // redirecionar para a pagina do produto expecífico

    }
  })
//


module.exports = router;