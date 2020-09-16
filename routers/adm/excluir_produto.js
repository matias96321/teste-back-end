const express = require('express')
const router = express.Router()
const DataBase = require('../../configs/DataBases')


router.get('/:id', async(req,res)=>{
    
    const query_delete = await DataBase.knex.table('produtos').where({id_produto: req.params.id}).delete()
    
    if (query_delete < 1) {
       console.log("Erro ao deletar este produto"); 
    } else {
        res.redirect('http://localhost:8080/listProduto')
    }
  
})


module.exports = router;