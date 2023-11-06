'use strict'

const knex = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.WRITER_PG_HOST,
      user: process.env.WRITER_PG_USER,
      password: process.env.WRITER_PG_PASS,
      port: process.env.PORT,
      database: 'main'
  },
  pool: {
    min: 1,
    max: 4,
  },
});

const getTransaction = async () => {

    const transaction = await knex.transaction()

    return {transaction};
}

const commitTransaction = ({ transaction }) => transaction.commit();

const rollbackTransaction = ({ transaction }) => transaction.rollback();

module.exports = { getTransaction, commitTransaction, rollbackTransaction, client: knex, knex };
