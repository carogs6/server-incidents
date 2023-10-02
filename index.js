// const server = require('./src/app.js');
// const { conn } = require('./src/db.js');

// // Syncing all the models at once.
// conn.sync({ alter: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });
///////////////////////////////////////////
const express = require('express');
const cors = require('cors');
const axios = require('axios');
// const routes = require('./routes/index.js');

const app = express();
const port = 3001; // Puedes cambiar el puerto según tus necesidades
const url = `https://gpenna.atlassian.net`;
const auth = "c2lzdGVtYXM0QHBlbm5hLmNvbS5hcjpBVEFUVDN4RmZHRjBDUXN3ZGhtVEdNV0lxWF9HbVRXMElvSEN2ZFIyUTM2TS1Pb0pmM20tYUZaNlEyalJhOFI1VFlMVkd0dXNXUzNyYWRLUnJ6bmJuVFAtSU54RmRzV1IyMTBpTVVVbWFVOWtBeEt5YTlfRzFFa2h4Y3VQQWp5T3RRTmRJbGI1azRfZ2YzOFVvQk9nMGVob1ZLZmJaeU81V09LWk5EWk9RR3d1OS1SV21iOUpmTU09RjdGQzNFRUU=";
const headers = {
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Authorization': `Basic ${auth}`,
  }
}

app.use(cors());
app.use(express.json());
// app.use('/', routes)
app.post('/api/notify-incident', async (req, res) => {
  try {
    console.log('Cuerpo de la solicitud:', req.body);

    const response = await axios.post(`${url}/rest/api/3/issue`, req.body, headers);

    console.log('Respuesta del servidor de Atlassian:', response.data);
    res.json(response.data);

  } catch (error) {
    console.error('Error en la solicitud:', error);

    if (error.response) {
      console.error('Detalles del error:', error.response.data);
    }

    res.status(error.response ? error.response.status : 500).json({ error: error.response ? error.response.data : 'Error en la solicitud' });
  }
});

app.post('rest/api/3/search', async (req, res) => {
  try {
    console.log('Cuerpo de la solicitud:', req.body);

    const response = await axios.get(`${url}/rest/api/3/search`, req.body, headers);

    console.log('Respuesta del servidor de Atlassian:', response.data);
    res.json(response.data);
    return response;

  } catch (error) {
    console.error('Error en la solicitud:', error);

    if (error.response) {
      console.error('Detalles del error:', error.response.data);
    }

    res.status(error.response ? error.response.status : 500).json({ error: error.response ? error.response.data : 'Error en la solicitud' });
  }
})

app.listen(port, () => {
  console.log(`Servidor intermedio en ejecución en http://localhost:${port}`);
});
