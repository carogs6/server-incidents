const { Router } = require('express');

const projectsRoutes = require('./projectsRoutes')
const transitionsRoutes = require('./transitionsRoutes')
const incidentsRoutes = require('./incidentsRoutes')
const userRoutes = require('./userRoutes')

const router = Router();

router.use("/project", projectsRoutes);

router.use("/transitions", transitionsRoutes);

router.use("/incident", incidentsRoutes);

router.use("/user", userRoutes);



module.exports = router;