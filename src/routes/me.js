const express = require('express')
const router = express.Router()
const meController = require('../app/controller/MeController')
const commentController = require('../app/controller/CommentController')


router.get('/hiddenSchool', meController.hiddenSchool)
router.get('/showSchool', meController.showSchool)
router.get('/allSchool', meController.allSchool)
router.get('/:slug', meController.showComment)
router.post('/:slug/addComment', commentController.addComment)




module.exports = router