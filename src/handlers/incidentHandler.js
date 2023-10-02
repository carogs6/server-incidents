const postIncident = async (req,res) => {
  const data = req.body;

      try {
        console.log('Cuerpo de la solicitud:', data);
    
        const response = await axios.post(`${url}/rest/api/3/issue`, data, {
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Basic ${auth}`,
          }
        });
        console.log('Respuesta del servidor de Atlassian:', response.data);
        res.json(response.data);
      } catch (error) {
        console.error('Error en la solicitud:', error);
    
        if (error.response) {
          console.error('Detalles del error:', error.response.data);
        }
    
        res.status(error.response ? error.response.status : 500).json({ error: error.response ? error.response.data : 'Error en la solicitud' });
      }
    
}

module.exports = { 
  postIncident
}