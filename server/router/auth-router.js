const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth-controller')
const {body} = require('express-validator')

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:3, max:32}),//TODO add check password with trim ?
    controller.registration)
router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.get('/activate/:link', controller.activate)
router.get('/refresh', controller.refresh)

module.exports = router
