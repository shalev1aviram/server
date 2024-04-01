const mongoose = require('mongoose')

const mongoConnect = async(url)=>{
    console.log("Connecting to mongoDB");
    await mongoose.connect(url)
}

module.exports = mongoConnect;