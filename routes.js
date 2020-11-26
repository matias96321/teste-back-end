const multer = require('multer')
const path = require("path");
const {Router} = require('express')
const router = Router()
const multerConfig = require('./configs/uploads')

// Rotas 
    const Login = require('./controllers/LoginController')

    const Produto = require('./controllers/ProdutoController');
    const Cliente = require('./controllers/ClienteController')
    
    const pagarme = require('./controllers/PagarmeController')
    
    const Frete = require('./controllers/FreteController')
    
    const Carrinho = require('./controllers/CarrinhoController')
//

    // configuração do multer
        const upload = multer(multerConfig)
    //

    // Rotas

        router.post('/login-Admin',Login.LoginAdmin)
        router.post('/login',Login.LoginClient)
        
        router.post('/cadastrarCliente',upload.single('images'),Cliente.Create)
        router.get('/cliente',Cliente.ReadAll)
        router.get('/cliente/:id',Cliente.ReadForId)
        router.patch('/cliente',upload.single('images'),Cliente.Update)
        router.patch('/cliente',Cliente.Update_Password)
        
        router.post('/produto',upload.single('images'),Produto.Create)
        router.get('/produto',Produto.ReadAll)
        router.get('/produto/:id',Produto.ReadForId)
        router.put('/produto',upload.single('images'),Produto.Update)
        router.delete('/produto/:id',Produto.Delete)

        router.post('/pagarme-cartao',pagarme.PagamentoCartao)
        router.post('/pagarme-boleto', pagarme.PagamentoBoleto)
        router.post('/pagarme-sacar',pagarme.Sacar) ///----rota não testada----///
        router.get('/pagarme-total',pagarme.Total) ///----rota não testada----///
        router.get('/pagarme-todastransacoes', pagarme.TodasTransações)
        router.post('/pagarme-estorno/:id', pagarme.EstornoPagamento)
        router.get('/pagarme-recebiveis', pagarme.Recebiveis)
        router.post('/pagarme-criarrecebedor', pagarme.CriandoRecebivel)
        router.post('/pagarme-criarcontabancaria', pagarme.CriandoContaBancaria)
        
        router.post('/frete',Frete.CalcularValorPrazo)

        router.post('/carrinho',Carrinho.Create)
        router.get('/carrinho',Carrinho.ReadAll)
        router.delete('/carrinho',Carrinho.Delete)

        // proximas rotas //

        // router.post('/pedido',pedido) 
        // router.get('/pedido',pedido) 



    //

  
    




module.exports = router








