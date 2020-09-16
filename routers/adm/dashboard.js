const express = require('express')
const router = express.Router()
const DataBase = require('../../configs/DataBases')



    router.get('/', async(req, res) => {
      res.render('adm/dashboard');
    })



module.exports = router;