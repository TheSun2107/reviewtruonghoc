const School = require('../models/School')
const Comment = require('../models/Comment')
const {multipleMongooseToObject} = require('../../util/mogoose')
const {mongooseToObject} = require('../../util/mogoose')

class MeController {
    //[GET] /me/:slug
    showComment(req, res, next) {
        Promise.all([
            School.findOneDeleted({slug: req.params.slug}),
            Comment.find({slug: req.params.slug}).sort({createdAt: 'desc'})
        ])
            .then(([school, comments]) => res.render('me/showComments', {
                school: mongooseToObject(school),
                comments: multipleMongooseToObject(comments)
            }))
            .catch(next)
    }

    //[GET] /me/allSchool
    allSchool(req, res, next) {
        School.findWithDeleted().sort({createdAt: 'desc'})
            .then(schools => res.render('me/allSchool', {
                schools : multipleMongooseToObject(schools)
            }))
            .catch(next)
    }

    //[GET] /me/activatedSchool
    showSchool(req, res, next) {
        School.findDeleted().sort({createdAt: 'desc'})
            .then(schools => res.render('me/showSchool', {
                schools : multipleMongooseToObject(schools)
            }))
            .catch(next)
    }

    //[GET] /me/deactivatedSchool
    hiddenSchool(req, res, next) {
        School.find().sort({createdAt: 'desc'})
            .then(schools => res.render('me/hiddenSchool', {
                schools : multipleMongooseToObject(schools)
            }))
            .catch(next)
    }
    
}

module.exports = new MeController