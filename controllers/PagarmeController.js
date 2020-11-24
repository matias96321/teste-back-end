const pagarme = require("pagarme");

//Consulta de saldo

module.exports = {
  //Valor total referente ao que tá no pagarme, disponível para sacar
  async Total(req, res) {
    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) => client.balance.primary())
      .then((balance) => {
        return res.send(balance);
      });
  },
  //Endpoint de sacar o dinheiro do pagarme pra conta bancaria do recebedor (dona da plataforma)
  async Sacar(req, res) {
    const { amount, bank_account_id, id } = req.body;

    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) =>
        client.transfers.create({
          amount: amount,
          recipient_id: id,
        })
      )
      .then((transfer) => {
        return res.send(transfer);
      })
      .catch((err) => {
        console.log(err.response.errors[0].message)
        return res.json({ message: err.response.errors[0].message });
      });
  },

  async PagamentoCartao(req, res) {
    //Resgatando o que vem do front-end
    const {
      amount,
      card_holder_name,
      card_expiration_date,
      card_number,
      card_cvv,
      customer,
      shipping,
      billing,
      items,
    } = req.body;

    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) =>
        client.transactions.create({
          amount: amount,
          card_number: card_number,
          card_cvv: card_cvv,
          card_expiration_date: card_expiration_date,
          card_holder_name: card_holder_name,
          customer: customer,
          billing: billing,
          shipping: shipping,
          items: items,
        })
      )
      .then((transaction) => {
        return res.json({ transaction: transaction });
      })
      .catch((err) => {
        return res.json({ message: err.response.error });
      });
  },

  async PagamentoBoleto(req, res) {
    const { amount, payment_method, postback_url, costumer } = req.body;
    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) =>
        client.transactions.create({
          amount: amount,
          payment_method: payment_method,
          postback_url: postback_url,
          customer: costumer,
        })
      )
      .then((transaction) => {
        return res.json(transaction);
      })
      .catch((err) => {
        console.log(err.response);
        return res.json({ message: err.response.error });
      });
  },

  //Retornar todas as transações feitas (COMPRAS/ULTIMOS PEDIDOS) <- usar o retorno dessa endpoint pra fazer o
  //map dos cards de "ultimos pedidos"
  async TodasTransações(req, res) {
    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) => client.transactions.all())
      .then((transactions) => {
        return res.json({ transactions: transactions });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  //Para o estorno funcionar, precisa colocar um map dos cards que retornam os ultimos pedidos... 
  //e lá poder escolher o que estornar
  async EstornoPagamento(req, res) {
    const { id } = req.params;
    pagarme.client
      .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
      .then((client) => client.transactions.refund({ id: id }));
  },
  //Para criar uma conta bancária
  async CriandoContaBancaria(req,res) {
    const { bank_code, agencia, agencia_dv, conta, conta_dv, legal_name, document_number } = req.body;
      pagarme.client
        .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
        .then((client) =>
          client.bankAccounts.create({
            bank_code: bank_code,
            agencia: agencia,
            agencia_dv: agencia_dv,
            conta: conta,
            conta_dv: conta_dv,
            legal_name: legal_name,
            document_number: document_number,
          })
        )
        .then((bankAccount) => { return res.json({bankAccount}) });
  },
  //Para criar um recebível
  async CriandoRecebivel(req,res) {
    const { bank_account_id, transfer_interval, transfer_day, transfer_enabled } = req.body;
      pagarme.client
        .connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
        .then((client) =>
          client.recipients.create({
            bank_account_id: bank_account_id,
            transfer_interval: transfer_interval,
            transfer_day: transfer_day,
            transfer_enabled: transfer_enabled,
          })
        )
        .then((recipient) => { return res.json({recipient}) });
  },
  //Para retornar os recebíveis
  async Recebiveis(req,res){
    pagarme.client.connect({ api_key: "ak_test_moyHJWO5yY9VUWgPvzHg5RAHR5uNn0" })
  .then(client => client.recipients.all())
  .then(recipients => { return res.json({recipients}) } )
  }
};
