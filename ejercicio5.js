const btnEliminar = document.getElementById("btnEliminar");
const mensaje = document.getElementById("mensaje");

btnEliminar.addEventListener("click", eliminarTodo);

function eliminarTodo() {
  axios.delete("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
      console.clear();

      console.log("✔ To-Do eliminado correctamente");
      console.log(response);

      // 🔥 Mostrar en UI
      mensaje.innerHTML = `
        <div style="border:1px solid green; padding:10px; margin-top:10px;">
          <p><strong>✔ To-Do eliminado correctamente</strong></p>
          <p><strong>Status:</strong> ${response.status}</p>
          <p><strong>Status Text:</strong> ${response.statusText || "OK"}</p>
          <p><strong>ID eliminado:</strong> 1</p>
        </div>
      `;
    })
    .catch(error => {
      console.error("Error:", error);

      mensaje.innerHTML = `
        <div style="border:1px solid red; padding:10px; margin-top:10px;">
          <p><strong>Error al eliminar el To-Do</strong></p>
        </div>
      `;
    });
}