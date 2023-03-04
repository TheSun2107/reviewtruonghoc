const express = require('express')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const path = require('path')
const route = require('./routes')
const db = require('./config/db')
const app = express()
const port = 3000

db.connect()

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.engine('.hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum(a, b) {return a + b}
  }
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, './resourses/views'))

route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})