document.addEventListener('DOMContentLoaded', function() {
    // Muestra la ventana emergente después de 5 segundos (puedes ajustar este tiempo)
    setTimeout(openPopup, 5000);
});

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

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
            // Cierra la ventana emergente
            closePopup();
        } else {
            console.error('Error al enviar datos');
        }
    })
    .catch(error => console.error('Error:', error));
});
