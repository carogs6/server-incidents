const { Router } = require('express');
const handlerGetProject = require('../handlers/projects/handlerGetProject');

const router = Router();

router.get(`/search`, handlerGetProject)


module.exports = router;