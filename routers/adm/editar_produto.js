const express = require('express')
const router = express.Router()
const DataBase = require('../../configs/DataBases')
const multer = require('multer')


// Configurando o multer    
    const storage = multer.diskStorage({
        destination: function (req, file, callback) { callback(null,'uploads')},
            filename: function (req, file, callback) {
        
         //let data = new Date().toISOString().replace(/:/g, '-') + '-';
        callback(null,file.originalname);
    }
    });

    const upload = multer({storage:storage})

// Recebendo o ID do produto que será editado.

    router.get('/:id', async(req,res)=>{

        try {

            const produtos = await DataBase.knex.select().table('produtos').where('id_produto',req.params.id) //.innerJoin('imagens','imagens.id_produto','produtos.id_produto').where('id_produto',req.params.id).first()

            res.send(produtos) // redirecionar com os dados do produto para editar

        } catch (error) {

            res.send({mensagem: "Erro ao consultar o banco de dados", Erro: error})

        }
    })

// Chegada dos Dados Editados 
  
    router.post('/update',upload.single('file'),async(req,res)=>{

        // evitando que o campo: "imagem" fique com valor nulo
        const imagem = ()=>{
            let img
            if (req.file == undefined) {
                img = undefined
            }else{  
                img = req.file.path
                
            }
            return img 
            }
            

        const NovoProduto = {
            produto: req.body.produto,
            descrisao: req.body.descrisao,
            preco: req.body.preco,
            estoque: req.body.estoque,
            img: imagem()
        }    
            
        // Atualizando dados(Update)        
        const query_update = await DataBase.knex('produtos').where({id_produto: req.body.id}).update(NovoProduto)
    
        if (query_update < 1) {
            console.log("Erro em salvar arquvio editado");
        } else {
            
            res.redirect(`/info/produto/${req.body.id}`)
            
        }

        // const NovaImg = await DataBase.knex('imagem').where({id_produto: req.body.id}).update({imagem: req.file.path})
    })
//
module.exports = router;