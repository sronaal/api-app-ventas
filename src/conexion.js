const mongoose = require("mongoose")


export const conexionDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Conexion DB Existosa")
    } catch (error) {
        
        throw  `Error conexion DB ${error}`
    }
}