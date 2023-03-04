const express = require('express')
const router = express.Router()
const schoolController = require('../app/controller/SchoolController')

router.get('/addSchool', schoolController.addSchool)
router.get('/:id/editSchool', schoolController.editSchool)
router.put('/:id/updateSchool', schoolController.updateSchool)
router.delete('/destroy/:id', schoolController.destroySchool)
router.delete('/:id', schoolController.showSchool)
router.patch('/:id', schoolController.hiddenSchool)
router.post('/addSchool', schoolController.requestAddSchool)




module.exports = router