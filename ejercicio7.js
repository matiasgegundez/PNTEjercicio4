const btn = document.getElementById("btnEliminar");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", eliminarFoto);

// 🔥 fetch + async/await + DELETE
async function eliminarFoto() {
  try {
    console.clear();

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos/1",
      {
        method: "DELETE"
      }
    );

    console.log("✔ Foto eliminada correctamente");
    console.log("Status:", response.status);

    // Mostrar en UI
    resultado.innerHTML = `
      <div style="border:1px solid green; padding:10px; margin-top:10px;">
        <p><strong>✔ Foto eliminada (simulado)</strong></p>
        <p><strong>Status:</strong> ${response.status}</p>
        <p><strong>ID eliminado:</strong> 1</p>
      </div>
    `;

  } catch (error) {
    console.error("Error:", error);

    resultado.innerHTML = `
      <div style="border:1px solid red; padding:10px; margin-top:10px;">
        <p><strong>Error al eliminar la foto</strong></p>
      </div>
    `;
  }
}