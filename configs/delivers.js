const { calcularPrecoPrazo,} = require("correios-brasil"); 
const {RenderPac,RenderSedex} = require("../views/Frete-views")
const {Correios} = require("../configs/correios")   


async function CorreioPac(data,Sedex){
    
    const args = Correios
   
    try {   
        Sedex == true ? args.nCdServico = '04014': args.nCdServico = '04510'
        
        args.sCepDestino = data.cep

        args.nVlPeso =+ data.peso
       
        return await calcularPrecoPrazo(args)

    } catch (error) {
        console.error(error)
    }
    
    return 
}

async function CorreiosSedex(data){return CorreioPac(data,true)}


module.exports ={
    CorreioPac,
    CorreiosSedex
}