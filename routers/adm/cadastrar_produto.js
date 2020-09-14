const express = require('express')
const router = express.Router();
const DataBase = require("../../configs/DataBases")
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) { callback(null,'uploads/')},
    filename: function (req, file, callback) {
        
        let data = new Date().toISOString().replace(/:/g, '-') + '-';
        callback(null,data +file.originalname);
    }
    });


const upload = multer({storage:storage})   

// Rota para criar um novo produto. // (incompleto*)

    router.post('/',upload.single('img'),async(req,res)=>{


        const produto = 
            {
                produto: req.body.produto,
                descrisao: req.body.descrisao,
                preco: req.body.preco,
                estoque: req.body.estoque,
                               
            }
        
        const idProduto = await DataBase.knex.insert(produto).into('produtos')   


        if (idProduto < 1) {
   
            res.send({mensagem: "Erro ao cadastrar produto no banco de dados"})
        
        } else {

            const imagem = {imagem_produto: req.file.path, id_produto: idProduto}

            try {

                const idImagens = await DataBase.knex.insert(imagem).into('imagens')

            } catch (error) {

                res.send({mensagem: "Erro ao carregar imagem", Erro :error})
                
            }   
            
        }


    })

module.exports = router;
