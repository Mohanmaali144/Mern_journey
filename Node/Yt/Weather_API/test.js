const city = 'Berlin'; // Replace 'Berlin' with the city you want to get the weather for
const apiUrl = `https://www.metaweather.com/api/location/search/?query=${city}`;

// Function to fetch weather data
async function getWeather(city) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.length > 0) {
      const woeid = data[0].woeid; // Extract woeid (Where On Earth ID)
      const weatherUrl = `https://www.metaweather.com/api/location/${woeid}/`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
      console.log(weatherData); // Log the weather data to the console
      return weatherData;
    } else {
      console.log('City not found');
    }
  } catch (error) {
    console.log('Error fetching weather:', error);
  }
}

// Example usage:
getWeather(city);
