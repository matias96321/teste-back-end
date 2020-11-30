module.exports = {
    TransacoesViews(dados = []){
        return dados.map(dados =>{
            return({

                id:dados.id,
                status:dados.status,
                payment_method:dados.payment_method,
                paid_amout:dados.paid_amout,
                date_created:dados.date_created,

                customer:{
                    id:dados.customer.external_id,
                    name:dados.customer.name,
                    email:dados.customer.email,
                    country:dados.customer.country,
                    phone_numbers:dados.customer.phone_numbers
                },

                shipping:{
                    id:dados.shipping.address.id,
                    zipcode:dados.shipping.address.zipcode,
                    country:dados.shipping.address.country,
                    state:dados.shipping.address.state,
                    city:dados.shipping.address.city,
                    expedited:dados.shipping.expedited,                        
                    delivery_date:dados.shipping.delivery_date
                },
                
                items:dados.items
            })
            
        })
    
    }   
}