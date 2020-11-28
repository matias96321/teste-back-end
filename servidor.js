const express = require('express')
const routers = require('./routes')
const cors = require('cors');
const path = require('path')
const app = express()
const BodyParser = require('body-parser')
const errors = require('./errors/handle')
    // Configurando express

        app.use(express.json())
    //
        app.use(BodyParser.json());
        app.use(BodyParser.urlencoded({ extended: true }));
    // Tratando cors
    
        app.use(cors())
    
    // tratando pasta de images    
    
        app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
    
    // rotas

        app.use(routers)

    //


    //app.use(errors.Error1)
    //app.use(errors.Error2)
    

app.listen(process.env.PORT || 8080, () => console.log(``))

