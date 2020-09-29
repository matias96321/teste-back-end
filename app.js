    //Sistema
    const express = require('express');
    const bodyParser = require('body-parser');
    const handlebars  = require('express-handlebars');
    const cors = require('cors');
//Cliente
    const cadastro = require('./controllers/cadastro')
    const home = require('./routers/users/listar_produtos')
    const login = require('./controllers/login')
    const listarProdutos = require('./routers/users/listar_produtos');
    const detalheProduto = require('./routers/users/detalhe_produto');
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
    const checkout = require('./routers/adm/checkout')
    const transaction = require('./routers/adm/transaction')

    const { Total, Sacar } = require('./controllers/pagarme');
//Sistema
    const path = require("path");
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
            app.use('/listallprodutos', listarProdutos);
            app.use(detalheProduto);
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
            app.use('/mostrarsaldo', Total)
            app.use('/sacardinheiro', Sacar)
            app.use('/checkout', checkout) //ROTA DE CHECKOUT (PEGAR O CARD HASH)
            app.use('/transaction', transaction) //ROTA DE PAGAMENTO

        //
    
    
    //

    // outros.
        module.exports = app;
    //





