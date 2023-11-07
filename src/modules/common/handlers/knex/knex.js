'use strict'

require("dotenv").config();

const knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL,
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
