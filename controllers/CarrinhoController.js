const {request,response} = require('express')
const {knex} = require('../configs/DataBases')
const {RenderAll} = require('../views/Carrinho-views')


    
    
    async function Create(Request = request,Response = response){
        
        try {

            const {id_cliente ,id_carrinho , id_produto , quantidade} = Request.body

            const item = {id_carrinho, id_produto , quantidade}
            
            const produto_existente = await ReadForId(Request.body);
            
            if (produto_existente === undefined) {
                
                await knex.insert(item).into('carrinho_produto')

            } else {
               
               await Update(Request.body);

            }
               
            return Response.json({mensagem: "success"})
            
        } catch (error) {
            Response.json(error)            
        }
        

    }
    
    async function ReadAll(Request = request,Response = response){
        
        const {id_carrinho} = Request.body
        try {
            const data = await knex('carrinho_produto')
        .select(
            'produtos.id_produto as id',
            'produtos.produto as produto',
            'produtos.descrisao as descrisao',
            'produtos.img as img',
            'produtos.preco as preco',
            'carrinho_produto.quantidade'
        )
        .innerJoin('produtos','carrinho_produto.id_produto','produtos.id_produto')
        .where({id_carrinho:id_carrinho})
    
        return Response.json(RenderAll(data))
        
        } catch (error) {
           console.log(error); 
        }
    }
    async function ReadForId(Request){

        const {id_carrinho , id_produto} = Request
        const result = await knex('carrinho_produto').select('id_produto as id').where({id_carrinho:id_carrinho, id_produto:id_produto}).first()
        return result
        
    }

    async function Update(Request){
        
        const {id_carrinho , id_produto , quantidade} = Request

        await knex('carrinho_produto').where({id_carrinho:id_carrinho,id_produto:id_produto}).update({quantidade:quantidade})
        return
        
    }

    async function Delete(carrinho_id){
        
        try {
            
            await knex.table('carrinho_produto').where({id_carrinho:carrinho_id}).delete()
            
        
        } catch (error) {
            console.log(error);
        }
    }
    async function DeleteForId(Request,Response){
        try {
       
            const {id_carrinho,id_produto} = Request.body
       
            await knex('carrinho_produto').delete().where({id_carrinho: id_carrinho, id_produto: id_produto});
       
            return Response.status(200).json({mensagem:'success'})
       
        } catch (error) {
            console.log(error);           
        }
        
    }

module.exports = {Create, ReadAll, Delete, DeleteForId}