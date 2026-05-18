const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const times = data.hourly.time;
    const temperatures = data.hourly.temperature_2m;

    const tableBody = document.getElementById("weather-data");

    for (let i = 0; i < 24; i++) {

      // Ubah format waktu
      const date = new Date(times[i]);

      const formattedTime = date.toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }) + " WIB";

      const row = `
        <tr>
          <td>${i + 1}</td>
          <td>${formattedTime}</td>
          <td>${temperatures[i]} °C</td>
        </tr>
      `;

      tableBody.innerHTML += row;
    }
  })
  .catch((error) => {
    console.log("Error:", error);
  });