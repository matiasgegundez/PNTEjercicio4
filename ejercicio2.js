const btnEliminar = document.getElementById("btnEliminar");
const mensaje = document.getElementById("mensaje");

btnEliminar.addEventListener("click", eliminarPost);

function eliminarPost() {
  axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
      console.clear();

      console.log("✔ Post eliminado correctamente");
      console.log(response);

      mensaje.textContent = "Post eliminado (simulado)";
    })
    .catch(error => {
      console.error("Error al eliminar:", error);
      mensaje.textContent = "Error al eliminar el post";
    });
}