const mysql = require('mysql2');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig)

const meta = async (input) => {
  return connection.promise().query(``)
}
const reviewID = async (input) => {
  return connection.promise().query(`select * from reviews where reviews.review_id = ${input}`)
}

module.exports = {
reviewID
}