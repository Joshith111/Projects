//http://api.weatherapi.com/v1/current.json?key=641fb4e9236646bebac145516250808&q=Mumbai&aqi=no
async function getWeather() {
    const location = document.getElementById("locationInput").value;
    const apiKey = "641fb4e9236646bebac145516250808"; // Your WeatherAPI key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
            alert("Location not found!");
            return;
        }

        // Date & Time (from API location's local time)
        document.getElementById("dateTime").textContent =
            `Date & Time: ${data.location.localtime}`;

        // Temperature
        document.getElementById("temperature").textContent =
            `Temperature: ${data.current.temp_c} °C`;

        // Rain percentage (chance of rain is not in current.json, showing precip instead)
        document.getElementById("rain").textContent =
            `Rain: ${data.current.precip_mm} mm`;

        // Condition description
        document.getElementById("description").textContent =
            `Condition: ${data.current.condition.text}`;
    } catch (error) {
        alert("Error fetching data.");
    }
}