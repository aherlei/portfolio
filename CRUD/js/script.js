document.addEventListener('DOMContentLoaded', function () {
    // Ruta al archivo JSON (ajusta la ruta según tu estructura de archivos)
    const jsonFilePath = 'json/libros.json';
  
    // Obtener el contenedor de libros
    const librosContainer = document.getElementById('libros-container');
  
    // Cargar y mostrar los libros desde el JSON
    fetch(jsonFilePath)
      .then(response => response.json())
      .then(libros => {
        // Crear HTML para mostrar cada libro
        const librosHTML = libros.map(libro => {
          return `
            <div>
              <strong>ID:</strong> ${libro.id}<br>
              <strong>Título:</strong> ${libro.title}<br>
              <strong>Año:</strong> ${libro.year}<br>
              <strong>Autor:</strong> ${libro.autor}<br>
              <strong>Género:</strong> ${libro.genre}<br>
              <hr>
            </div>
          `;
        }).join('');
  
        // Mostrar los libros en el contenedor
        librosContainer.innerHTML = librosHTML;
      })
      .catch(error => console.error('Error al cargar el JSON:', error));
  });
  