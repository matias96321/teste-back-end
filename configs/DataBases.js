const { hash } = require('bcrypt');

const knex = require('knex')({
  client: 'mysql2',
  connection: {
      host : 'localhost',
      user : 'ptkm1',
      password : '87127186',
      database : 'e-commerce'
    }
})

module.exports = {

  knex: knex,
  hash: 'b0d68ca3aa45bcc2cc51f366b54d2a197cee24baca77053a92ff5436c9c57fd9'
};
