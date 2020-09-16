const express = require('express');
const bodyParser = require('body-parser');
const handlebars  = require('express-handlebars');
const cadastro = require('./controllers/cadastro')
const listar = require('./routers/adm/listar_clientes')
const login = require('./controllers/login')
const novoProduto = require('./routers/adm/cadastrar_produto')
const listProduto = require('./routers/adm/listar_produto')
const info = require('./routers/adm/info_produto')
const excluir = require('./routers/adm/excluir_produto')
const editar = require('./routers/adm/editar_produto')
const path = require("path")
const app = express()


    // configuração do BodyParser.
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
    //

    // Configuração do Handlebars.
        app.engine('handlebars',handlebars({defaultLayaut: 'main'}))
        app.set('view engine','handlebars');
    //
    
    // path.
        app.use(express.static(path.join(__dirname + "views")))
    //

    // Midwares.
        app.use('/uploads',express.static('uploads'));

    //
    

    // Rotas de testes. 

               
        // Rotas publicas
            app.use('/listar',listar);
            app.use('/login',login);
            app.use('/cadastro',cadastro);
        //

        // Rodatas de ADM
            app.use('/cadastro',novoProduto) // http://localhost:8080/addProduto  Obs(usar o Insomminia)
            app.use('/listProduto',listProduto) // http://localhost:8080/listProduto   Obs(Navegador)
            app.use('/info',info)
            app.use('/editar',editar)
            app.use('/excluir',excluir)

         //
    
    
    //

    // outros.
        module.exports = app;
    //





