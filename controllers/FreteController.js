const { calcularPrecoPrazo } = require("correios-brasil"); 
const {request,response} = require('express')
const {RenderPac,RenderSedex} = require("../views/Frete-views")
const {CorreioPac,CorreiosSedex} = require('../configs/delivers')
//  04014 - SEDEX (avista)
//  04510 - PAC - (avista)  

module.exports = {
    
    async CalcularValorPrazo(Request = request,Response = response){
        
        const data = Request.body
        
        const Pac =  RenderPac(await CorreioPac(data))

        const Sedex =  RenderSedex(await CorreiosSedex(data))
                                                
        console.log(Pac,Sedex)

        Response.json({Pac,Sedex});
    
    }
}