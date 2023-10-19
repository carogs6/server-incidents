const { Router } = require('express');
const handlerDoTransition = require('../handlers/transitions/handlerDoTransition');
const searchTransitions = require('../handlers/transitions/searchTransitions');


const router = Router();

router.post(`/`, handlerDoTransition)

router.get(`/:key`, searchTransitions)

module.exports = router;