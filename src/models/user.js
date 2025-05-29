import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    email: String,
    firstname: String,
    lastname : String,
    login_code: String,
    roles: {
        admin: Boolean,
        seller:Boolean
    }
})



export default mongoose.model('User',userSchema)