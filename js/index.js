document.addEventListener("DOMContentLoaded", function() {
    fetch("../reto5/reto5/datos/index.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        let estudiantes = data;
        const listaEstudiantes = document.getElementById("lista-estudiantes");

        estudiantes.forEach(estudiante => {
            const estudianteElemento = document.createElement("li");
            estudianteElemento.classList.add("estudiante");

            estudianteElemento.innerHTML = `
                <img src="${estudiante.imagen}" alt="Error al cargar la imagen"/>
                <p>${estudiante.nombre}</p>
            `;

            listaEstudiantes.appendChild(estudianteElemento);
        });
    })

    .catch(error => console.error("Error al cargar los datos:", error));
});