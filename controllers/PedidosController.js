const {knex} = require('../configs/DataBases')

module.exports ={

    async Create(transaction,endereco) {

        
        const dados ={
            cliente_id: transaction.customer.external_id,
            data_pedido: transaction.date_created,
            cidade: transaction.shipping.address.city,
            estado: transaction.shipping.address.state,
            cep: transaction.shipping.address.zipcode, 
            transpt: transaction.shipping.name,
            frete: transaction.shipping.fee,
            status: transaction.status,
            endereco: `${transaction.shipping.address.neighborhood} - ${transaction.shipping.address.street} - ${transaction.shipping.address.street_number} - ${endereco} `
            
        }

        const id = await knex('pedidos').insert(dados)

        const itens = transaction.items
        
        itens.forEach(async item => {
            var valor_total = item.quantity * item.unit_price
            await knex('pedidosprodutos').insert({
              pedido_id: id,
              produto_id: item.id,
              preco_unitario: item.unit_price,
              quantidade: item.quantity,
              valor_total: valor_total
            })
        })

        console.log(id);
        
    }
}