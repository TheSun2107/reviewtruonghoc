const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongoose_delete = require('mongoose-delete')

//mongoose.plugin(slug)

const Comment = new Schema({
    name: { type: String, default: "incognito" },
    position: { type: String, default: "incognito" },
    body: { type: String, required: true, minLength: 10 },
    point: { type: Number, required: true, min: 1, max: 5},
    slug: { type: String, required: true },
    schoolname: { type: String, required: true }
  }, {
    timestamps: true,
  })

  Comment.plugin(mongoose_delete, {
    overrideMethods: true,
    deletedAt : true 
  })

  module.exports = mongoose.model('Comment', Comment)