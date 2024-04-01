const mongoose = require('mongoose')

const mongoConnect = async(url)=>{
    console.log("Connecting to mongoDB");
    // Waiting for the connection to complete using `await'
    await mongoose.connect(url)
}

module.exports = mongoConnect;