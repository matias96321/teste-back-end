//Sistema
    const express = require('express');
    const bodyParser = require('body-parser');
    const handlebars  = require('express-handlebars');
    const cors = require('cors');
//Cliente
    const cadastro = require('./controllers/cadastro')
    const home = require('./routers/users/home')
    const login = require('./controllers/login')
    const detalheProduto = require('./routers/users/detalheProduto');
//Adm
    const novoProduto = require('./routers/adm/cadastrar_produto')
    const listProduto = require('./routers/adm/listar_produto')
    const info = require('./routers/adm/info_produto')
    const listCliente = require('./routers/adm/listar_clientes')
    const excluir = require('./routers/adm/excluir_produto')
    const editar = require('./routers/adm/editar_produto')
    const dashboard = require('./routers/adm/dashboard')
    const loginadm = require('./routers/adm/login_admin')
    const cadastrarAdmin = require('./routers/adm/cadastrar_adm')
//Sistema
    const path = require("path")
    const app = express()

    app.use(cors())
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

            app.use('/home',home);
            app.use('/login',login);
            app.use('/cadastrarCliente',cadastro);
          //  app.use('/listallprodutos', listarProdutos);
            app.use('/detalheProduto',detalheProduto);
        //

        // Rodatas de ADM
            app.use('/admin/login', loginadm)
            app.use('/dashboard',dashboard)
            app.use('/cadastro',novoProduto)
            app.use('/listProduto',listProduto) // http://localhost:8080/listProduto   Obs(Navegador)
            app.use('/info/produto/',info)
            app.use('/editar',editar)
            app.use('/excluir',excluir)
            app.use('/listCliente',listCliente)
            app.use('/admin/register',cadastrarAdmin)

        //
    
    
    //

    // outros.
        module.exports = app;
    //





