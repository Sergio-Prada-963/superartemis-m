import Categoria from "./../models/categorias.js";

const obtenerCategoria = async (req,res)=>{ 
    const categorias = await Categoria.find();
    res.json(categorias); 
}


export {obtenerCategoria};