





function display(){

    maindeegre =  document.getElementById("maindeegre");
    
}





let data = fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
);

data
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok.");
    }
  })
  .then((weatherData) => {
    // console.log(jsonData); 

    console.log(weatherData)
   
    // Accessing latitude and longitude
const latitude = weatherData.latitude;
const longitude = weatherData.longitude;

// Access individual properties
console.log('Latitude:', weatherData.latitude);
console.log('Longitude:', weatherData.longitude);
console.log('Generation time (ms):', weatherData.generationtime_ms);
console.log('UTC offset (seconds):', weatherData.utc_offset_seconds);
console.log('Timezone:', weatherData.timezone);
console.log('Timezone Abbreviation:', weatherData.timezone_abbreviation);
console.log('Elevation:', weatherData.elevation);

// Access current weather data
console.log('Current Time:', weatherData.current.time);
console.log('Current Interval:', weatherData.current.interval);
console.log('Current Temperature:', weatherData.current.temperature_2m);
console.log('Current Wind Speed:', weatherData.current.wind_speed_10m);

// Access hourly weather data (assuming arrays have the same length)
console.log('Hourly Data:');
let i = 0;
// for (let i = 0; i < weatherData.hourly.time.length; i++) {
  console.log('Time:', weatherData.hourly.time[i]);
  console.log('Temperature:', weatherData.hourly.temperature_2m[i]);
  console.log('Relative Humidity:', weatherData.hourly.relative_humidity_2m[i]);
  console.log('Wind Speed:', weatherData.hourly.wind_speed_10m[i]);
  console.log('-----------------------------');
// }
  })
  .catch((error) => {
    console.log(error);
  });

