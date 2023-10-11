const { Router } = require('express');
const handlerNewIncident = require('../handlers/incidents/handlerNewIncident');
const handlerIncidentsSearch = require('../handlers/incidents/handlerIncidentsSearch');

const router = Router();

// router.get()
router.post('/api/notify-incident', handlerNewIncident);
router.post('/rest/api/3/search', handlerIncidentsSearch);

module.exports = router;