import express from 'express'
import mysql from 'mysql'
import { middlewareDebuggerRoutes } from './middlewares/middlewareDebuggerRoutes.js'
import { config } from './database/config.js'
const port = 3000
const app = express()

const connectionTable = mysql.createConnection(config)
const sqlCreateTable = `
    CREATE TABLE IF NOT EXISTS people (
        id int primary key auto_increment,
        name varchar(255) not null
    )
`
connectionTable.query(sqlCreateTable)
connectionTable.end()

const connectionInsert = mysql.createConnection(config)
const sqlInsert = `INSERT INTO people (name) VALUES ('Marcos Vinicios')`
connectionInsert.query(sqlInsert)
connectionInsert.end()


app.use(middlewareDebuggerRoutes);
app.get('/', (req, res) => {
    const connectionSelect = mysql.createConnection(config)

    const sqlSelect = `SELECT * FROM people`
    connectionSelect.query(sqlSelect, (err, rows) => {
        if (err)
            res.send('<h1>An error occur.</h1>')

        const listOfPeople = 
            rows.reduce((acc, row) => {
                return acc + `<li> ${row['name']} </li>`
            }, '')

        res.send(`
            <h1> Full cycle </h1>

            ${
                listOfPeople ? `<ul> ${listOfPeople} </ul>` : ''
            }
        `)
    })
    connectionSelect.end()
})

app.listen({
    port,
}, () => {
    console.log(`Server is running on port ${port}`)
})