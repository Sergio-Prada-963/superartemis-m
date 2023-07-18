const url = "http://localhost:3309/api/categorias"

export const getCategorias = async ()=>{
    try {
        const categoria = await fetch(url);
        const data = await categoria.json();
        return data;
    } catch (error) {
        console.log(error,"chale :(");
    }
}
export const addCategorias = async (data)=>{
    try {
        await fetch(url, {
            method: "POST",
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error,"chale :(");
    }
}
export const deleteCategoria = async (id)=>{
    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error,"chale :(");
    }
}
export const updateCategoria = async (update)=>{
    try {
        await fetch(`${url}/${update._id}`, {
            method: "PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(update)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
    } catch (error) {
        console.log(error,"chale :(");
    }
}