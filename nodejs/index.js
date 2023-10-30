const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlDropDatabase = `DROP TABLE IF EXISTS people`
const sqlCreateDatabase = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))`
connection.query(sqlDropDatabase)
connection.query(sqlCreateDatabase)

const values = [['Vitor'], ['Bruna'], ['Liz']]
const sqlInsert = `INSERT INTO people(name) VALUES ?`
connection.query(sqlInsert, [values])

const sqlSelect = `SELECT * FROM people`
const data = new Promise((resolve, reject) => {
  connection.query(sqlSelect, (err, result) => {
    console.log(result)
    resolve(
      JSON.parse(JSON.stringify(result))
        .map((person) => `<li>${person.name}</li>`)
        .join('')
    )
  })
})

connection.end()

app.get('/', async (req, res) => {
  const dataList = await data
  console.log(dataList)
  const html = `<h1>Full Cycle Rocks!</h1>\n
    <ul>
    ${dataList}
    </ul>`

  res.send(html)
})

app.listen(port, () => {
  console.log('Rodando na porta ', +port)
})
