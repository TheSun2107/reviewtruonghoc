const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongoose_delete = require('mongoose-delete')

mongoose.plugin(slug)

const School = new Schema({
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    url: String,
    slug: { 
      type: String, 
      slug: "name",
      unique: true
    },
  }, {
    timestamps: true,
  })

  School.plugin(mongoose_delete, {
    overrideMethods: true,
    deletedAt : true,
  })

  module.exports = mongoose.model('School', School)