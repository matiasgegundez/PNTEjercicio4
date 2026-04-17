const btn = document.getElementById("btnCargar");
const lista = document.getElementById("lista");

btn.addEventListener("click", async () => {
  try {
    const articulos = await obtenerArticulos();

    console.log("Artículos:");
    console.log(articulos);

    lista.innerHTML = "";

    const titulo = document.createElement("h2");
    titulo.textContent = `Total artículos: ${articulos.length}`;
    lista.appendChild(titulo);

    articulos.slice(0, 10).forEach(post => {
      const card = document.createElement("div");

      card.innerHTML = `
        <p><strong>ID:</strong> ${post.id}</p>
        <p><strong>User:</strong> ${post.userId}</p>
        <p><strong>Título:</strong> ${post.title}</p>
      `;

      card.style.border = "1px solid #ccc";
      card.style.borderRadius = "8px";
      card.style.padding = "10px";
      card.style.marginBottom = "10px";
      card.style.background = "#f9f9f9";

      lista.appendChild(card);
    });

  } catch (error) {
    console.error("Error:", error);
  }
});

async function obtenerArticulos() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const data = await response.json();

  return data;
}