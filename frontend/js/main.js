// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/clientes')
        .then(response => response.json())
        .then(data => {
            //<tbody id="table-cliente"></tbody>
            const elemento = document.getElementById("table-cliente")

           for (let i = 0; 1 < data.length; i++) {
            console.log(data[i]) //muestro en la consola

           }
})
});
