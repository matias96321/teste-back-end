const express = require("express");
const router = express.Router();
const pagarme = require('pagarme');

router.post("/", (req,res) => {
  const { valorTotal, nomeCartao, dataExpiracao, numeroCartao, cvv, costumer, items } = req.body;

  pagarme.client.connect({ api_key: 'ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0' })
  .then(client => client.transactions.create({
    "amount": valorTotal,
    "card_number": numeroCartao,
    "card_cvv": cvv,
    "card_expiration_date": dataExpiracao,
    "card_holder_name": nomeCartao,
    "customer": costumer,
    "billing": {
      "name": "Trinity Moss",
      "address": {
        "country": "br",
        "state": "sp",
        "city": "Cotia",
        "neighborhood": "Rio Cotia",
        "street": "Rua Matrix",
        "street_number": "9999",
        "zipcode": "06714360"
      }
    },
    "shipping": {
      "name": "Neo Reeves",
      "fee": 1000,
      "delivery_date": "2000-12-21",
      "expedited": true,
      "address": {
        "country": "br",
        "state": "sp",
        "city": "Cotia",
        "neighborhood": "Rio Cotia",
        "street": "Rua Matrix",
        "street_number": "9999",
        "zipcode": "06714360"
      }
    },
    "items": items
  }))
  .then((transaction) => {
    return res.json({transaction: transaction})
  })

})

module.exports = router;