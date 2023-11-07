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



const testDatabaseConnection = async () => {
  try {
    const result = await knex.raw('SELECT 1 as result');
    const firstRow = result.rows[0];
    
    if (firstRow && 'result' in firstRow) {
      console.log('Connection creaed with database, result: ', firstRow.result);
    } else {
      console.error('Bad connection');
    }
  } catch (error) {
    console.error('Erro connect database:', error);
  } finally {
    await knex.destroy();
  }
}

testDatabaseConnection();

const getTransaction = async () => {

  const transaction = await knex.transaction()

  return {transaction};
}

const commitTransaction = ({ transaction }) => transaction.commit();

const rollbackTransaction = ({ transaction }) => transaction.rollback();

module.exports = { getTransaction, commitTransaction, rollbackTransaction, client: knex, knex };
