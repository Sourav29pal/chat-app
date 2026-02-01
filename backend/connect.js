import mongoose from "mongoose";


const connectdB=async()=>{
     await mongoose.connect("mongodb+srv://ecommerce_1234:2OsWDAUbuxuLIC10@cluster0.yanikzo.mongodb.net/chatapp")
        .then(()=>{
            console.log("MONGO DB connection is successful")
        }).catch((err)=>{
            console.log(err)
        })
}
export  default connectdB