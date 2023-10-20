const { Router } = require('express');

const router = Router();

router.get('/search', handlerBoardSearch);

module.exports = router;