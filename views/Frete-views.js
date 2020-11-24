module.exports = {
    RenderPac(data){
        return ({
           
            Valor: data.Valor, 
            Prazo: data.PrazoEntrega
            
        })
    },
    RenderSedex(data){
        return ({
             
            Valor:data.Valor, 
            Prazo: data.PrazoEntrega
            
        })
    }
}