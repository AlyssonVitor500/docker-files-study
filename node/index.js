const express = require('express')
const port = 3000
const app = express()

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = ` INSERT INTO people (name) VALUES ('ALYSSON')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Hello, world</h1>')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})