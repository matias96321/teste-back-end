const express = require('express')
const router = express.Router()
const DataBase = require('../../configs/DataBases')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) { callback(null,'uploads/')},
    filename: function (req, file, callback) {
        
        let data = new Date().toISOString().replace(/:/g, '-') + '-';
        callback(null,data +file.originalname);
    }
    });

    const upload = multer({storage:storage})

// Recebendo o ID do produto que será editado

router.get('/:id', async(req,res)=>{
    try {

        const produto = await DataBase.knex.select().table('produto')//.innerJoin('imagens','imagens.id_produto','produtos.id_produto').where('id_produto',req.params.id).first()

        res.send(produto) // redirecionar com os dados do produto para editar

    } catch (error) {

        res.send({mensagem: "Erro ao consultar o banco de dados", Erro: error})

    }
})

// Chegada dos Dados Editados 
router.post('/update',upload.single('img'),async(req,res)=>{

    try {
        
        const NovoProduto = await DataBase.knex('produto').where({id_produto: req.body.id}).update({produto: req.body.produto,
        descrisao: req.body.descrisao, preco: req.body.preco, img: req.file.path})

        // const NovaImg = await DataBase.knex('imagem').where({id_produto: req.body.id}).update({imagem: req.file.path})

    } catch (error) {
        
    }

})

module.exports = router;