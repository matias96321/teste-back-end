const pagarme = require('pagarme');
const express = require('express')

//https://docs.pagar.me/docs/obtendo-os-dados-do-cartao
/*pagarme.client.connect({ encryption_key: 'ek_test_i6vE2KF2jaGTbObC6nH768kVAglUNN' })
          .then(client => client.security.encrypt(card))
          .then(card_hash => console.log(card_hash))

*/
//Consulta de saldo

module.exports = {

  async Total(req,res){
    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) => client.balance.primary())
      .then((balance) => {
        return res.send(balance);
      });
  },

  Sacar(req,res){
      pagarme.client
        .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
        .then((client) =>
          client.transfers.create({
            amount: 10000,
            bank_account_id: "id_conta_do_banco",
            recipient_id: "Recebedor_id",
          })
        )
        .then((transfer) => {
          return res.send(transfer);
        });
  },


}
