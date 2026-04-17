const btn = document.getElementById("btnCargar");
const lista = document.getElementById("lista");

btn.addEventListener("click", cargarComentarios);

async function cargarComentarios() {
  try {
    console.clear();
    lista.innerHTML = "";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=2"
    );

    const comentarios = await response.json();

    // Mostrar en consola
    console.log("Comentarios del post 2:");
    console.log(comentarios);

    // Mostrar en pantalla
    comentarios.forEach(comentario => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${comentario.name}</strong><br>
        <small>${comentario.email}</small><br>
        <p>${comentario.body}</p>
      `;
      lista.appendChild(li);
    });

  } catch (error) {
    console.error("Error:", error);
  }
}