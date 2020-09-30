const express = require("express");
const router = express.Router();
const pagarme = require('pagarme');


router.post('/',(req,res)=>{

  const card_hash = req.body;

  pagarme.client.connect({ api_key: 'ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0' })
  .then(client => client.transactions.capture({ id: '1627822' }))

  // Using Promise chain:
  pagarme.client.connect({ api_key: 'ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0' })
    .then(client => {
      client.transactions.create({
        capture: false,
        amount: 100,
        card_number: '4111111111111111',
        card_holder_name: 'abc',
        card_expiration_date: '1225',
        card_cvv: '123',
      })
        .then(client.transactions.capture)
    })

})