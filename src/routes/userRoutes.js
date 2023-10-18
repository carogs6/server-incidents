const { Router } = require('express');
const handlePostUser = require('../handlers/users/handlePostUser');

const router = Router();

router.get(`/customer`, handlePostUser)

module.exports = router;