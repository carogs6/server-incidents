const { Router } = require('express');
const handlerDoTransition = require('../handlers/transitions/handlerDoTransition');


const router = Router();

router.post(`/`, handlerDoTransition)

module.exports = router;