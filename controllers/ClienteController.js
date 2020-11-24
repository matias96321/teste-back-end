const {request,response} = require('express')
const DataBase = require("../configs/DataBases")
const yup = require('yup')
const axios = require('axios')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Render,RenderAll} = require('../views/Cliente-Views')


module.exports ={

    async Create(Request = request,Response = response, next) {
        
        const {nome, email, senha, cep} = Request.body
        const dataforms = {nome, email, senha, cep}

        
        // const emailBD = await DataBase.knex.select('email').table('clientes').where({email: data.email})

        const data = {
            nome: nome,
            email: email,
            senha: senha,
            cep: cep
        }

        const schema = yup.object().shape({

            nome: yup.string().required(),
            email: yup.string().required().email(),
            senha: yup.string().required().max(9).min(5).trim(),
            cep: yup.string().required().trim()
            
        })

        try {

            await schema.validate(dataforms,{
                abortEarly:false
            })

            const novos_dados = {request}
            
            const RequestCep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((e)=>{return e.data;})

            data.senha = bcrypt.hashSync(senha,10)

            const id = await DataBase.knex.insert(dataforms).into('clientes')
            
            console.log(data)
            console.log(id)
            
            await DataBase.knex.insert({id_Cliente:id}).into('carrinhos')

            const endereco = [{cep: RequestCep.cep, cidade: RequestCep.localidade, estado: RequestCep.uf, id_Cliente: id}]
            
            await DataBase.knex.insert(endereco).into('endereço')
            
            const token = jwt.sign({    

                id: id,
                nome: dataforms.nome,
                email: dataforms.email,
            },  DataBase.hash,{expiresIn: "1h"})            

            Response.status(200).json({mensagem: "Usuário cadastrado com sucesso", token: token  })
 
        } catch (e) {
            if (e instanceof yup.ValidationError ) {
                const erro = [] 
                e.inner.forEach(err => {
                    erro.push({Campo: err.path, Erro: err.errors})
                })
                Response.json({erro})                    
            }
           Response.status(200).json(e)
        }
    },
    async ReadAll(Request = request,Response = response){
        
        const data = await DataBase.knex('clientes').select()
        console.log(data)
        Response.status(200).json(RenderAll(data))
    },
    async ReadForId(Request = request,Response = response){

        const {id} = Request.params

        const data = await DataBase.knex.select().table('clientes').where({id_Cliente: id})

        Response.status(200).json(Render(data))

    },
    async Update(Request = request,Response = response){
        
        const {id} = Request.params

        var {senha} = Request.body

        const schema = yup.object().shape({
            senha: yup.string().required().length(7).trim()
        })

        schema.validate(senha,{
            abortEarly:false
        })

        senha = await bcrypt.hash(senha,10)

        await DataBase.knex('clientes').where({id_Cliente: id}).update(senha)
        
    }        
      

}
