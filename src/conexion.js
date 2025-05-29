import mongoose from 'mongoose'


const conexionDB = async () => {


    try {
        await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/ventas')
        console.log("Conexion DB Existosa")
    } catch (error) {
        
        throw  `Error conexion DB ${error}`
    }
}

export default conexionDB