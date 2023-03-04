const School = require('../models/School')
const Comment = require('../models/Comment')
const {multipleMongooseToObject} = require('../../util/mogoose')
const {mongooseToObject} = require('../../util/mogoose')

class SchoolController {
    //[GET] /school/addSchool
    addSchool(req, res, next) {
        res.render('schools/addSchool')
    }
    //[POST] /school/addSchool
    requestAddSchool(req, res, next) {
        const school = School(req.body)
        school.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }
    //[GET] /school/editSchool
    editSchool(req, res, next) {
        School.findById({ _id: req.params.id })
            .then((school) => res.render('schools/editSchool', {
                school : mongooseToObject(school)
            }))
            .catch(next)
    }
    //[PUT] /school/updateSchool
    updateSchool(req, res, next) {
        School.updateOne({ _id: req.params.id }, req.body )
            .then(() => res.redirect('/me/hiddenSchool'))
            .catch(next)
    }
    //[DELETE] /school/:id
    showSchool(req, res, next) {
        School.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[DELETE] /school/destroy:id
    destroySchool(req, res, next) {
        School.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[PATCH] /school/:id
    hiddenSchool(req, res, next) {
        School.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new SchoolController