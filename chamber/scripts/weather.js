
const currentTemp = document.getElementById('temperature');
const weatherIcon = document.getElementById('weatherIcon');
const captionDesc = document.getElementById('condition');

const url = 'https://api.openweathermap.org/data/2.5/weather';


const latitude = 49.74990967757486;
const longitude = 6.637441024950051;
const apiKey = '77bf00e20f235f8f556baa0e89701021';

const completeUrl = `${url}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(completeUrl);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

apiFetch();

function displayResults(data) {
  
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;

  
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.setAttribute('src', iconUrl);
  weatherIcon.setAttribute('alt', data.weather[0].description);

  
  captionDesc.textContent = `${data.weather[0].description}`;
}
