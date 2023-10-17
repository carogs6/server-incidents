const { Router } = require('express');
const handlerNewIncident = require('../handlers/incidents/handlerNewIncident');
const handlerIncidentsSearch = require('../handlers/incidents/handlerIncidentsSearch');

const projectsRoutes = require('./projectsRoutes')
const transitionsRoutes = require('./transitionsRoutes')
const incidentsRoutes = require('./incidentsRoutes')

const router = Router();

router.use("/project", projectsRoutes);

router.use("/transitions", transitionsRoutes);
// router.get()
router.use("/incident", incidentsRoutes);



module.exports = router;