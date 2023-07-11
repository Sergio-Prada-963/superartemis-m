import mongoose from "mongoose";

const categoriasSchema = mongoose.Schema({
        CategoriaNombre: {
            type: String,
            required: true,
            trim: true
        },
        Descripcion:{
            type:String,
            required:true,
            trim:true
        },
        Imagen:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
);

const Categoria = mongoose.model("Categoria", categoriasSchema);
/* const clientessSchema = mongoose.Schema({
    imagen: {
        type: String,
        required: true,
        trim: true
    },
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true
    }
},
{
    timestamps:true
}
);

const Clientes = mongoose.model("Cliente", clientessSchema); */
export default Categoria;