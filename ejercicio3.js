const btn = document.getElementById("btnCargar");
const lista = document.getElementById("lista");

btn.addEventListener("click", cargarAlbums);

// FUNCIÓN ASYNC
async function cargarAlbums() {
  try {
    console.clear();
    lista.innerHTML = "";

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums?userId=1"
    );

    const albums = response.data;

    // Mostrar en consola
    console.log("Álbumes del usuario:");
    console.log(albums);

    // Mostrar en pantalla
    albums.forEach(album => {
      const li = document.createElement("li");
      li.textContent = album.title;
      lista.appendChild(li);
    });

  } catch (error) {
    console.error("Error:", error);
  }
}