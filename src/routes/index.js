const siteRouter = require('./site')
const schoolsRouter = require('./school')
const meRouter = require('./me')



function route(app) {

app.use('/', siteRouter)
app.use('/school', schoolsRouter)
app.use('/me', meRouter)



}

module.exports = route
