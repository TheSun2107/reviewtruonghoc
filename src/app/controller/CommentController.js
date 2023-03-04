const School = require('../models/School')
const Comment = require('../models/Comment')
const {multipleMongooseToObject} = require('../../util/mogoose')
const {mongooseToObject} = require('../../util/mogoose')

class CommentController {
    //[POST] /me/:slug/addComment
    addComment(req, res, next) {
        const comment = new Comment( req.body )
        comment.save()
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /schools/:id
}

module.exports = new CommentController