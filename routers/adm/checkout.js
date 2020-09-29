const express = require("express");
const router = express.Router();
const pagarme = require('pagarme');

router.post("/", (req,res) => {
  const { nomeCartao, dataExpiracao, numeroCartao, cvv } = req.body;
  const card = {
    card_holder_name: nomeCartao,
    card_expiration_date: dataExpiracao,
    card_number: numeroCartao,
    card_cvv: cvv,
  };

  var cardValidations = pagarme.validate({ card: card });

  //verificar se algum campo não é válido
  if (!cardValidations.card.card_number)
    res.json({ message: cardValidations });

  pagarme.client
    .connect({ encryption_key: "ek_test_i6vE2KF2jaGTbObC6nH768kVAglUNN" })
    .then((client) => client.security.encrypt(card))
    .then((card_hash) => {
      return res.json({ card_hash, cardValidations });
    });
});

module.exports = router;