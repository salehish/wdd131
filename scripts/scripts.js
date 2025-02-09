document.addEventListener('DOMContentLoaded', function () {
    const temp = 30; 
    const windSpeed = 10; 
    const windChillElement = document.getElementById('wind-chill');

    function calculateWindChill(temp, windSpeed) {
        return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
    }

    if ((temp <= 10 && windSpeed > 4.8) || (temp <= 50 && windSpeed > 3)) {
        windChillElement.innerText = `${calculateWindChill(temp, windSpeed)}°C`;
    } else {
        windChillElement.innerText = "N/A";
    }

    document.getElementById('currentYear').innerText = new Date().getFullYear();
    document.getElementById('lastModified').innerText = document.lastModified;
});