const url = "http://localhost:3309/categorias/all"

export const getCategorias = async ()=>{
    try {
        const categoria = await fetch(url);
        const data = await categoria.json();
        return data;
    } catch (error) {
        console.log(error,"chale :(");
    }
}