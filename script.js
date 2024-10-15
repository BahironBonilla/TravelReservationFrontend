document.getElementById("paquete-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    const aerolinea = document.getElementById("aerolinea").value;
    const destino = document.getElementById("destino").value;
    const hotel = document.getElementById("hotel").value;
    const ciudad = document.getElementById("ciudad").value;
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;

    const paquete = {
        vuelo: {
            aerolinea: aerolinea,
            destino: destino
        },
        hotel: {
            nombre: hotel,
            ciudad: ciudad
        },
        automovil: {
            marca: marca,
            modelo: modelo
        }
    };

    fetch("/crear-paquete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(paquete)
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerText = data;
        })
        .catch(error => {
            document.getElementById("result").innerText = "Error al crear el paquete.";
        });
});
