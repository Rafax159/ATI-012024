document.addEventListener("DOMContentLoaded", function() {
    fetch("../reto5/reto5/datos/index.json")

    .then(response => {

        if(!response.ok){
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
                <a href="/perfil.html">
                    <img src="${estudiante.imagen}" alt="Error al cargar la imagen"/>
                    <p>${estudiante.nombre}</p>
                </a>
            `;

            listaEstudiantes.appendChild(estudianteElemento);
        });

        /*estudiantes.forEach(estudiante => {
            //const idPerfil = new URLSearchParams(window.location.search).get('id');     //Extrae el ID del perfil de la URL

            fetch()         //Obtiene los datos del perfil
            .then(response => response.json())
            .then(datosPerfil => {
                // Actualiza elementos HTML con la información del perfil
                document.getElementById('nombrePerfil').textContent = datosPerfil.nombre;
                document.getElementById('dorado').textContent = datosPerfil.colorFavorito;
                document.getElementById('harry').textContent = datosPerfil.libroFavorito;
                document.getElementById('ER').textContent = datosPerfil.estiloMusica;
                document.getElementById('EGG').textContent = datosPerfil.videojuegosFavoritos;
                document.getElementById('CPJ').textContent = datosPerfil.lenguajesAprendidos;
            });
        })*/

        const galeria = document.querySelector('.galeria');
        const enlacesImagenes = document.querySelectorAll('.imagen');
        const informacionPersona = document.getElementById('informacion-persona');

        fetch("../reto5/reto5/datos/index.json")
            .then(respuesta => respuesta.json())
            .then(datos => mostrarImagenes(datos))
            .catch(error => console.error('Error al cargar el JSON:', error));

        function mostrarImagenes(datos){
            datos.personas.forEach(persona => {
                const enlaceImagen = document.createElement('a');
                enlaceImagen.classList.add('imagen');
                enlaceImagen.dataset.id = persona.id;
                enlaceImagen.href = '#';

                const imagen = document.createElement('img');
                imagen.src = persona.imagen;
                imagen.alt = persona.nombre;

                enlaceImagen.appendChild(imagen);
                galeria.appendChild(enlaceImagen);

                enlacesImagenes.push(enlaceImagen);
        });

        enlacesImagenes.forEach(enlace => {
            enlace.addEventListener('click', (evento) => {
            evento.preventDefault();

            const idPersona = enlace.dataset.id;
            const persona = datos.personas.find(persona => persona.id === idPersona);

            if (persona) {
                mostrarInformacionPersona(persona.nombre, persona.descripcion);
            } else {
                console.error('No se encontró información para la persona:', idPersona);
            }
            });
        });
        }

        function mostrarInformacionPersona(nombrePersona, descripcionPersona) {
        informacionPersona.querySelector('#nombre').textContent = nombrePersona;
        informacionPersona.querySelector('#descripcion').textContent = descripcionPersona;

        informacionPersona.classList.remove('escondido');
        }

    })

    .catch(error => console.error("Error al cargar los datos:", error));
});