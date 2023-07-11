import Categoria from "./../models/categorias.js";

const obtenerCategoria = async (req,res)=>{ 
    try {
        const categorias = await Categoria.find();
        res.json(categorias); 
    } catch (error) {
        console.log(error);
    }
}

const agregarCategoria = async (req, res)=>{
    const categoria = new Categoria(req.body);
    try {
        const nuevaCategoria = await categoria.save();
        res.json(nuevaCategoria);
    } catch (error) {
        console.log(error);
    }
} 

const borrarCategoria = async (req,res)=>{
    try {
        await Categoria.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404)
        res.send({error:"categoria no found"})
    }
}
const actualizarCategorias = async (req,res)=>{
    try {
        const categoria = await Categoria.findOne({_id: req.params.id});
        if(req.body.CategoriaNombre)
            categoria.CategoriaNombre = req.body.CategoriaNombre
        if(req.body.Descripcion)
            categoria.Descripcion = req.body.Descripcion
        if(req.body.Imagen)
            categoria.Imagen = req.body.Imagen
        await categoria.save()
        res.send(categoria);
    } catch (error) {
        res.status(404)
        res.send({error:"categoria no found"})
    }
}

const oneCategoria = async (req,res)=>{
    try {
        const oneCategorias = await Categoria.findOne({_id:req.params.id});
        res.json(oneCategorias);
    } catch (error) {
        console.log({error:"no found :("});
    }
}

export {obtenerCategoria, agregarCategoria, borrarCategoria, actualizarCategorias, oneCategoria};