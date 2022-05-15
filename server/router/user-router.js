const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller')

const authMiddleware = require('../middlewares/auth-middleware')
const roleMiddleware = require('../middlewares/role-middleware')


router.use(authMiddleware)
router.get('/all', roleMiddleware(["ADMIN","USER"]), controller.getUsers)


module.exports = router