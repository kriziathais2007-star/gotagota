// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/clientes')
        .then(response => response.json())
        .then(data => {
            //<tbody id="table-cliente"></tbody>
            const elemento = document.getElementById("table-cliente")

           for (let i = 0; i < data.length; i++) {
            //data(i), muestra en forma de array
            let cliente = data[i]
            let fila = `
                         <tr>
                         <td>${cliente.id}</td>
                         <td>${cliente.nombre}</td>
                         <td>${cliente.apellido}</td>
                         <td>${cliente.dni}</td>
                         <td>${cliente.telefono}</td>
                         <td>${cliente.direccion}</td>
                         </tr>
                       `
            elemento.innerHTML += fila
            //muestra los resultados en la consola
            console.log(cliente)
           }
     })
});
