import mongoose from "mongoose";

const conectarDB = async ()=>{
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        const url = `Connected to mongo from server at: ${connectionDB.connection.host} - at port: ${connectionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
};
export default conectarDB;