const axios = require('axios');


const handlerDoTransition = async (req, res) => {
  const url = `https://gpenna.atlassian.net`;
  const auth = "c2lzdGVtYXM0QHBlbm5hLmNvbS5hcjpBVEFUVDN4RmZHRjBDUXN3ZGhtVEdNV0lxWF9HbVRXMElvSEN2ZFIyUTM2TS1Pb0pmM20tYUZaNlEyalJhOFI1VFlMVkd0dXNXUzNyYWRLUnJ6bmJuVFAtSU54RmRzV1IyMTBpTVVVbWFVOWtBeEt5YTlfRzFFa2h4Y3VQQWp5T3RRTmRJbGI1azRfZ2YzOFVvQk9nMGVob1ZLZmJaeU81V09LWk5EWk9RR3d1OS1SV21iOUpmTU09RjdGQzNFRUU=";

  const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Authorization': `Basic ${auth}`,
  };

  const  data = req.body;

  const { id, list } = data

  try {
    console.log('data', data)
    console.log('id', id)
    const transitions = (await axios.get(`${url}/rest/api/2/issue/${id}/transitions` , { headers })).data.transitions;
    console.log('transitions', transitions)

    const transitionName = transitions.find((transition) => transition.name == list);
    console.log('transitionName', transitionName)

    const bodyData = {
      "transition": {
        "id": transitionName.id
      }
    }

    const response = await axios.post(`${url}/rest/api/3/issue/${id}/transitions`, bodyData, {headers});

    console.log('Respuesta del servidor de Atlassian:', response.data);
    res.json(response.data);

  } catch (error) {
    console.log('Error en handler "handlerDoTransition":', error);

  }
}

module.exports = handlerDoTransition;