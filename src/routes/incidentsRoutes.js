const { Router } = require('express');
const handlerIncidentsSearch = require('../handlers/incidents/handlerIncidentsSearch');
const handlerNewIncident = require('../handlers/incidents/handlerNewIncident');


const router = Router();

router.post('/search', handlerIncidentsSearch);

router.post('/api/notify-incident', handlerNewIncident);

module.exports = router;