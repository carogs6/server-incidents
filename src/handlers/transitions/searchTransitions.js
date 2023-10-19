const axios = require('axios');

const searchTransitions = async (req, res) => {
  const url = `https://gpenna.atlassian.net`;
  const auth = "c2lzdGVtYXM0QHBlbm5hLmNvbS5hcjpBVEFUVDN4RmZHRjBDUXN3ZGhtVEdNV0lxWF9HbVRXMElvSEN2ZFIyUTM2TS1Pb0pmM20tYUZaNlEyalJhOFI1VFlMVkd0dXNXUzNyYWRLUnJ6bmJuVFAtSU54RmRzV1IyMTBpTVVVbWFVOWtBeEt5YTlfRzFFa2h4Y3VQQWp5T3RRTmRJbGI1azRfZ2YzOFVvQk9nMGVob1ZLZmJaeU81V09LWk5EWk9RR3d1OS1SV21iOUpmTU09RjdGQzNFRUU=";

  const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Authorization': `Basic ${auth}`,
  };

  const  data = req.params;

  try {
    const key = data.key

    console.log('key', key)


    const response = await axios.get(`${url}/rest/api/2/issue/${key}/transitions` , { headers })
    console.log('transitions searchTransitions', response)
    console.log('Respuesta del servidor de Atlassian en searchTransitions:', response.data);
    res.json(response.data);

  } catch (error) {
    console.error('Error en la solicitud searchTransitions:', error);

    if (error.response) {
      // console.error('Detalles del error en searchTransitions:', error.response.data);
    }

    res.status(error.response ? error.response.status : 500).json({ error: error.response ? error.response.data : 'Error en la solicitud searchTransitions' });
  }
}

module.exports = searchTransitions;