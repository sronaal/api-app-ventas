import mongoose, { Model } from "mongoose";


const userSchema = mongoose.Schema({

    email: String,
    firstname: String,
    lastname : String,
    login_code: String,
    roles: {
        admin: Boolean,
        seller:Boolean
    }
})



export default Model('User',userSchema)