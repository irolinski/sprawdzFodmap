import 'dotenv/config'
import  express from 'express';
import bodyParser from 'body-parser'
import path from 'path'
import fs from 'fs'

const app = express();

const PORT = process.env.PORT || 8080;

const { Client } = require("pg");
require('dotenv').config({
    override: true,
});

const client = new Client(process.env.DATABASE_URL);
// client.connect();

(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT NOW()");
  } catch (err) {
    console.error("error executing query:", err);
   }
})();


app.use(express.static('build'));


app.get('/seed', async (req, res, next) => {

    const seedQuery = fs.readFileSync('./seeds/fodmap_table.sql', { encoding: 'utf8' })
    client.query(seedQuery, (err: any, res: any) => {
    console.log(err, res)
    console.log('Seeding Completed!')
  })
})

app.get('/api/diet', async (req, res, next) => {
    const q = await client.query('select * from fodmap_table')
   //  console.log(q.fields.map(field => field.name))
    // console.log(q.rows)
     res.send(q.rows)
})
   
app.get('/api/recipes', async(req, res, next) => {
    const q = await client.query('select * from recipes_db')
    console.log(q.rows);
    res.send(q.rows)
})


app.listen(PORT, () => console.log(`Listening on ${PORT}`));

