module.exports = {

    RenderAll(data){
        
        const Carrinho = data.map(data => {
            return ({

                id: data.id,
                produto: data.produto,
                descrisao: data.descrisao,
                preco_unitario: data.preco,
                quantidade: data.quantidade,
                images: `http://localhost:8080/uploads/${data.img}`

            })
        })

        return Carrinho
    }
}