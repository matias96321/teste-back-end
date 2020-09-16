const express = require('express')
const router = express.Router();
const DataBase = require("../../configs/DataBases")
const multer = require('multer');
const e = require('express');

// Configurando o multer     
    const storage = multer.diskStorage({
        destination: function (req, file, callback) { callback(null,'uploads/')},
        filename: function (req, file, callback) {
            
            let data = new Date().toISOString().replace(/:/g, '-') + '-';
            callback(null,file.originalname);
        }
    });
    const upload = multer({storage:storage})   

// Chamada para pagina de cadastro.

    router.get('/',async(req,res)=>{
        res.render('adm/cadastro')
    })


// Rota para criar um novo produto. // (incompleto*)

    router.post('/novo',upload.single('file'),async(req,res)=>{

        // evitando que o campo: "imagem" fique com valor nulo
        const imagem = ()=>{
            let img
            if (req.file == undefined) {
                img = "uploads/default.jpg"
            }else{  
                img = req.file.path
                
            }
            return img 
            }
            
        // montando objeto    
        const NovoProduto = {

            produto: req.body.produto,
            descrisao: req.body.descrisao,
            preco: req.body.preco,
            estoque: req.body.estoque,
            img: imagem()
        }   
        
        // tratando posíveis erros 
        if (NovoProduto.length < 1) {
   
            res.send({mensagem: "Erro ao cadastrar produto no banco de dados"})
        
        } else {

            try {
                // insert
                await DataBase.knex.insert(NovoProduto).into('produtos')
                   
                res.redirect('http://localhost:8080/listProduto')

            } catch (error) {

                res.send({mensagem: "Dados inválidos", Erro :error})
                
            }   
            
        }


    })

module.exports = router;
