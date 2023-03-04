const mongoose = require('mongoose')

async function connect() {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect('mongodb+srv://admin:allinlove1803@cluster0.ghopiyp.mongodb.net/?retryWrites=true&w=majority')

        console.log('Connected!!!')
    } catch (error) {
        console.log('Failed!!!')
    }
}


module.exports = { connect }
