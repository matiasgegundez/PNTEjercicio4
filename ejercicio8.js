const btn = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

const API_KEY = "a8908f1faae6b9cf97964e673298854b";

btn.addEventListener("click", obtenerClima);

async function obtenerClima() {
  try {
    const ciudad = document.getElementById("ciudad").value;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
    );

    const data = response.data;

    console.log("Clima:");
    console.log(data);

    resultado.innerHTML = `
      <div style="border:1px solid blue; padding:10px; margin-top:10px;">
        <p><strong>Ciudad:</strong> ${data.name}</p>
        <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
        <p><strong>Clima:</strong> ${data.weather[0].description}</p>
        <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
      </div>
    `;

  } catch (error) {
    console.error("Error:", error);

    resultado.innerHTML = `
      <p style="color:red;">Error al obtener el clima</p>
    `;
  }
}