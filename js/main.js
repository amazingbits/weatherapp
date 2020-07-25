const key = "cb79c1c31ac1bc1fb183dd71982fcb69";
const form = document.querySelector("form");
const result = document.querySelector(".result");

form.addEventListener("submit", (event) => {
   event.preventDefault();
   const city = document.querySelector("input[name='city']").value;
   if(city.trim() === "") {
       return false;
   }
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
   const data = getData(url);
});

async function getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    
    if(data.cod !== 200) {
        result.innerHTML = `
            <div class="result-wrapper">
                <p>City not found...</p>
            </div>
        `;
        return false;
    }

    let currentCity = [data].map(city => {
       const { name, weather, main } = city;
       return { name, weather, main };
    });
    let resultData = `
        <div class="result-wrapper">
            <h1>Results...</h1>
            <div>
                <strong>Name:</strong>
                <p>${currentCity[0].name}</p>
            </div>
            <div>
                <strong>Temp:</strong>
                <p>${currentCity[0].main.temp}°</p>
            </div>
            <div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${currentCity[0].weather[0].icon}.svg" alt="Image">
            </div>
            <div>
                <strong>${currentCity[0].weather[0].main}</strong>
            </div>
            <div>
                <p>${currentCity[0].weather[0].description}</p>
            </div>
        </div>
    `;
    result.innerHTML = resultData;
}