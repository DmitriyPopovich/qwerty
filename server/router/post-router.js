const express = require('express');
const router = express.Router();
const controller = require('../controllers/posts-controller')

const authMiddleware = require('../middlewares/auth-middleware')
const roleMiddleware = require('../middlewares/role-middleware')

router.use(authMiddleware)
router.get('/', roleMiddleware(["ADMIN","USER"]), controller.getPosts)
router.post('/new', controller.createPost)

// router.get('/:id', controller.getPost)
// router.post('/update/:id', controller.updatePost)
// router.post('/delete/:id', controller.deletePost)

module.exports = router