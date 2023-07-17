import { getCategorias } from "../apis/API.js";

document.addEventListener('DOMContentLoaded', getNav);

async function getNav(){
    const categorias = await getCategorias();
    const nav = document.querySelector('#cards')
    categorias.forEach(element => {
        nav.innerHTML += `
        <div class="card" style="width: 30rem;">
            <img src="../${element.Imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.CategoriaNombre}</h5>
              <p class="card-text">${element.Descripcion}</p>
              <a href="#" class="btn btn-info">Go somewhere</a>
            </div>
        </div>
        `
    });
}