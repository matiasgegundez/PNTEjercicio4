const btn = document.getElementById("btnCargar");
const lista = document.getElementById("lista");

btn.addEventListener("click", cargarTareas);

async function cargarTareas() {
  try {
    console.clear();
    lista.innerHTML = "";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?userId=3"
    );

    const tareas = await response.json();

    const pendientes = tareas.filter(tarea => !tarea.completed);

    console.log("Tareas pendientes del usuario 3:");
    console.log(pendientes);

    // encabezado en UI
    const titulo = document.createElement("h2");
    titulo.textContent = `Usuario ID: 3 - Tareas pendientes: ${pendientes.length}`;
    lista.appendChild(titulo);

    pendientes.forEach(tarea => {
      const li = document.createElement("li");

      li.innerHTML = `
        <strong>ID de tarea:</strong> ${tarea.id}<br>
        <strong>Usuario:</strong> ${tarea.userId}<br>
        <strong>Título:</strong> ${tarea.title}<br>
        <strong>Estado:</strong> ${tarea.completed ? "Completada" : "Pendiente"}
      `;

      li.style.marginBottom = "15px";
      li.style.border = "1px solid #ccc";
      li.style.padding = "10px";
      li.style.listStyle = "none";

      lista.appendChild(li);
    });

  } catch (error) {
    console.error("Error:", error);
    lista.innerHTML = `<p>Error al obtener las tareas.</p>`;
  }
}