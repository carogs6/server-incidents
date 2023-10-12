// const server = require('./src/app.js');

//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
///////////////////////////////////////////
const express = require('express');
const cors = require('cors');
// const axios = require('axios');
const routes = require('./src/routes/index.js')

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor intermedio en ejecución en http://localhost:${port}`);
});
