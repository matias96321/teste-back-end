const yup = require('yup')

module.exports = {

    Error1(req,res,next){
        const err = new Error("Pagina não encontrado")
            err.status = 404
        next(err)
    },
    Error2(err, req, res, next){
        
        if (err instanceof yup.ValidationError ) {
            const err = new Error("Bad Request")
            console.log(err)    ;
            res.json(err)    
        } else {
                
        res.status(err.status || 500)
        
        res.json({
            Erro:{
                status: err.status || 500,
                message: "Erro interno"
            }
        })
    }
    
    }
}
