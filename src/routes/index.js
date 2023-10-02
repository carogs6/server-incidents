const { Router } = require('express');
const router = Router();
const handlerIncident = require('../handlers/incidentHandler');

// router.get()
router.post('/api/notify-incident', handlerIncident);

module.exports = router;