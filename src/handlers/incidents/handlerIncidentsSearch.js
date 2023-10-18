const axios = require('axios');

const handlerIncidentsSearch = async (req, res) => {
  const url = `https://gpenna.atlassian.net`;
  const auth = "c2lzdGVtYXM0QHBlbm5hLmNvbS5hcjpBVEFUVDN4RmZHRjBDUXN3ZGhtVEdNV0lxWF9HbVRXMElvSEN2ZFIyUTM2TS1Pb0pmM20tYUZaNlEyalJhOFI1VFlMVkd0dXNXUzNyYWRLUnJ6bmJuVFAtSU54RmRzV1IyMTBpTVVVbWFVOWtBeEt5YTlfRzFFa2h4Y3VQQWp5T3RRTmRJbGI1azRfZ2YzOFVvQk9nMGVob1ZLZmJaeU81V09LWk5EWk9RR3d1OS1SV21iOUpmTU09RjdGQzNFRUU=";

  const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Authorization': `Basic ${auth}`,
  };

  try {

    const issueIdList = (await axios.post(`${url}/rest/api/3/search`, req.body, { headers })).data.issues;

    const issueIds = issueIdList.map((issue) => issue.id)

    const issueList = await Promise.all(
      issueIds.map(async (issueId) => {
        try {
          const response = await axios.get(`${url}/rest/api/3/issue/${issueId}`, { headers });
          return response.data;
        } catch (error) {
          console.error(`Error en la solicitud de detalles para la incidencia ${issueId}:`, error);
          throw error; 
        }
      })
    );

    // console.log('Respuesta del servidor de Atlassian:', issueIdList.data);
    res.json(issueList);

  } catch (error) {
    console.error('Error en la solicitud handlerIncidentsSearch:', error);

    if (error.response) {
      console.error('Detalles del error en handlerIncidentsSearch:', error.response.data);
    }

    res.status(error.response ? error.response.status : 500).json({ error: error.response ? error.response.data : 'Error en la solicitud' });
  }
};

module.exports = handlerIncidentsSearch;