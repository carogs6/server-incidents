const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
// const axios = require('axios');
const routes = require('./src/routes/index.js')

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor intermedio en ejecución en http://localhost:${port}`);
});
