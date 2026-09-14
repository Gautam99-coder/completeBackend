const mongoose=require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://gautamtharu1000_db_user:LeALSKyACT4RxRUf@complete-backend.k06illh.mongodb.net/Helly");
    
    console.log("Connected to DB");
}

module.exports = connectDB;