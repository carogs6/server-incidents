const { Router } = require('express');
const handlerBoardSearch = require("../handlers/board/handlerBoardSearch")

const router = Router();

router.get('/search', handlerBoardSearch);

module.exports = router;