// EVENTOS DE JAVASCRIPT (CLICK, CARGAR, KEY)
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/clientes')
        .then(response => response.json())
        .then(data => {
            console.log('Datos:', data);
            const elemento = document.getElementById("tabla-cliente")
            data.forEach(c => elemento.innerHTML += `<tr><td>${c.id}</td><td>${c.nombre}</td></tr>`);
            console.log(elemento)
        })
});
