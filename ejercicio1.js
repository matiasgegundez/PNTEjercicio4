const btn = document.getElementById("btnCargar");
const lista = document.getElementById("lista");

btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {

      console.clear();
      lista.innerHTML = ""; // limpio lista

      const primeros10 = posts.slice(0, 10);

      primeros10.forEach(post => {
        // mostrar en consola
        console.log(post.title);

        // mostrar en pantalla
        const li = document.createElement("li");
        li.textContent = post.title;
        lista.appendChild(li);
      });

    })
    .catch(error => {
      console.error("Error:", error);
    });
});