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


        const produto = [
            {
                produto: req.body.produto,
                descrisao: req.body.descrisao,
                preco: req.body.preco,
                estoque: req.body.estoque,
                img: req.file.path
                               
            }
        ]
        


        if (produto.length < 1) {
   
            res.send({mensagem: "Erro ao cadastrar produto no banco de dados"})
        
        } else {

            try {

                const idProduto = await DataBase.knex.insert(produto).into('produtos')
                   
                res.send({produto})

            } catch (error) {

                res.send({mensagem: "Dados inválidos", Erro :error})
                
            }   
            
        }


    })

module.exports = router;
