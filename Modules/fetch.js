const apiKey = '42424ae85a0fdf7474c833b13d000c5f';
const units = 'metric';
const city = 'London';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

export const request = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const { name, wind, weather } = data;
  const temp = data.main.temp.toFixed(0);
  function printData() {
    document.querySelector('.main').innerText = `${weather[0].main}`;
    document.querySelector('.city').innerText = `${name}`;
    document.querySelector('.temp').innerText = `${temp}. °C`;
    document.querySelector('.wind').innerText = `${wind.speed} km/h`;
    document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/' + weather[0].icon + '.png';
  }
  printData();
};
