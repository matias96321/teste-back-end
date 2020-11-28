const {knex} = require('../configs/DataBases')
module.exports = {
    
    async PostBeck(Request,Response) {
       
        try {

            const dados = Request.body

            await knex('pedidos').update({status: dados.current_status}).where({id: dados.id})
            
        } catch (error) {
            console.log(error);
        }
        
        return 
    

    }
}