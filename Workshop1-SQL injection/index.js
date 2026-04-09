import express from 'express';
import betterSqlite3 from 'better-sqlite3';


const db = betterSqlite3('products.db');
const app = express();
const port = 3003;

app.use(express.static('www'));

app.use(express.json());

app.get('/api/products', (req, res) => {
  run(res, `
    SELECT * FROM products
  `, 'all');
});

app.get('/api/products/:id', (req, res) => {
  req.body = { id: req.params.id };
  run(res, `
    SELECT * FROM products
    WHERE id = ${req.params.id}
  `, 'all');
});

app.delete('/api/products/:id', (req, res) => {
  run(res, `
    DELETE FROM products
    WHERE id = ${req.params.id}
  `);
});

function run(res, query, type = 'run') {
  res.json(db.prepare(query)[type]());
}

app.listen(port,
  () => console.log('Listening on http://localhost:' + port));