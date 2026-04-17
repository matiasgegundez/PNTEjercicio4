const btn = document.getElementById("btnCargar");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", cargarUsuario);

async function cargarUsuario() {
  try {
    console.clear();

    const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
    const user = await response.json();

    console.log("Usuario obtenido:");
    console.log(user);

    resultado.innerHTML = `
      <h2>Información del usuario</h2>
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Nombre:</strong> ${user.name}</p>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Teléfono:</strong> ${user.phone}</p>
      <p><strong>Sitio web:</strong> ${user.website}</p>
      <p><strong>Ciudad:</strong> ${user.address.city}</p>
      <p><strong>Empresa:</strong> ${user.company.name}</p>
    `;
  } catch (error) {
    console.error("Error:", error);
    resultado.innerHTML = `<p>Error al obtener el usuario.</p>`;
  }
}