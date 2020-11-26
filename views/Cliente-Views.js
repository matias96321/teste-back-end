module.exports = {

    Render(data){

        const cliente = []
        data.forEach(data =>{ 
            cliente.push({
                id: data.id_cliente,
                cliente: data.nome,
                imagem: `http://localhost:8080/uploads/${data.img}`,
                email: data.email,
                password: data.password
            })
        })
        return cliente 
    
    },
    RenderAll(data = []){  

        const clientes = []
        data.map(data =>{ 
            clientes.push({
                id: data.id_cliente,
                cliente: data.nome,
                imagem: `http://localhost:8080/uploads/${data.img}`,
                email: data.email,
                password: data.password
            })
        })
        return clientes 
    }
}