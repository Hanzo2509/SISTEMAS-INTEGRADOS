document.addEventListener('DOMContentLoaded', function() {
  // Puedes agregar lógica adicional que se ejecutará cuando el DOM esté completamente cargado
});

document.getElementById('subscribeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;

  // Envía el correo electrónico y el nombre al backend
  fetch('https://script.google.com/macros/s/AKfycbwHli9pzlN4-2UVcfyB3shg9Z6_EtdQ8kPz6gZiFBw1F2JrK4br3sVYVViYrCvUIWGluQ/exec', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
          'email': email,
          'name': name,
      }),
  })
  .then(response => {
      if (response.ok) {
          console.log('Datos enviados con éxito');
          document.getElementById('subscribeForm').reset(); // Limpiar campos del formulario
          document.getElementById('confirmationMessage').style.display = 'block'; // Mostrar mensaje de confirmación
          setTimeout(function() {
              document.getElementById('confirmationMessage').style.display = 'none'; // Ocultar mensaje después de unos segundos
          }, 3000); // Cambia 3000 a la cantidad de milisegundos que desees que el mensaje esté visible
      } else {
          console.error('Error al enviar datos');
      }
  })
  .catch(error => console.error('Error:', error));
});
