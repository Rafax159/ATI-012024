document.addEventListener("DOMContentLoaded", function(){
    fetch("datos.json")
    .then(response => response.json())
    .then(data => {

        const configuracion = data.configuracion;

        const elemento = document.createElement("p");

        elemento.textContent = `Configuración: ${configuracion}`;

        document.body.appendChild(elemento);
    })

    .catch(error => console.error("Error al cargar los datos:", error));
});