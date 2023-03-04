const School = require('../models/School')
const Comment = require('../models/Comment')
const {multipleMongooseToObject} = require('../../util/mogoose')
const {mongooseToObject} = require('../../util/mogoose')

class SiteController {
    //[GET] /
    index(req, res, next) {
        Promise.all([
            Comment.findWithDeleted().sort({createdAt: 'desc'}),
            School.findDeleted().sort({createdAt: 'desc'}),
            School.findDeleted({ level: 'Mầm non' }).sort({createdAt: 'desc'}),
            School.findDeleted({ level: 'Tiểu học' }).sort({createdAt: 'desc'}),
            School.findDeleted({ level: 'Trung học cơ sở' }).sort({createdAt: 'desc'}),
            School.findDeleted({ level: 'Trung học phổ thông' }).sort({createdAt: 'desc'}),
            School.findDeleted({ level: 'Đại học' }).sort({createdAt: 'desc'}),
            
        ])
          
            .then(([
                comments,
                schools,
                preSchools,
                primarySchools,
                juniorHighSchools,
                highSchools,
                universities
                ]) => res.render('home', {
                schools : multipleMongooseToObject(schools),
                comments : multipleMongooseToObject(comments),
                preSchools : multipleMongooseToObject(preSchools),
                primarySchools : multipleMongooseToObject(primarySchools),
                juniorHighSchools : multipleMongooseToObject(juniorHighSchools),
                highSchools : multipleMongooseToObject(highSchools),
                universities : multipleMongooseToObject(universities),
                
            }))
            .catch(next)
    }

}

module.exports = new SiteController